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
import { motion } from "framer-motion";

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
  description: string;
  thumbnail: { url: string };
  video?: { url?: string };
}

function ContentfulContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState<Projects[]>([]);
  const [currentProject, setCurrentProject] = useState<Projects | null>(null);

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currentProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{currentProject?.description}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={0}
        padding="10px"
      >
        {page.map((item, index) => (
          <motion.div
            initial={{ zIndex: 1, opacity: 0.2 }}
            whileHover={{ scale: 1.1, zIndex: 100, opacity: 1 }}
            key={index}
          >
            <ProjectCardContainer key={index}>
              <ProjectCard
                project={item}
                onClick={() => {
                  onOpen();
                  setCurrentProject(item);
                }}
              />
            </ProjectCardContainer>
          </motion.div>
        ))}
      </SimpleGrid>
    </>
  );
}

export default ContentfulContent;
