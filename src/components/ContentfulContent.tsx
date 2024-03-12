import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardContainer from "./ProjectCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const query = `{
    portfolioItemCollection {
        items {
            title
            thumbnail {
                url
            }
            video {
                url
            }
        }
    }
}`;

export interface Projects {
  title: string;
  thumbnail: { url: string };
  video?: { url?: string };
}

function ContentfulContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState<Projects[]>([]);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/` +
          import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_CONTENTFUL_API_KEY,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.portfolioItemCollection.items);
      });
  }, []);

  if (page.length === 0) {
    return "Loading...";
  }

  // render the fetched Contentful data

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={0}
        padding="10px"
      >
        {page.map((item, index) => (
          <ProjectCardContainer key={index}>
            <ProjectCard project={item} onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>hi there</ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </ProjectCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default ContentfulContent;
