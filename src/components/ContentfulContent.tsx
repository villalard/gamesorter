import { SimpleGrid } from "@chakra-ui/react";
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
  video: { url: string };
}

function ContentfulContent() {
  const [page, setPage] = useState<Projects[]>([]);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/x2f5bny453ec/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_CONTENTFUL_API_KEY,
        },
        body: JSON.stringify({ query }),
      })
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
        spacing={3}
        padding="10px"
      >
        {page.map((item, index) => (
          <ProjectCardContainer key={index}>
            <ProjectCard project={item} />
          </ProjectCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default ContentfulContent;
