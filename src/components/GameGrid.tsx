import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCardContainer from "./ProjectCardContainer";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ProjectCardContainer key={skeleton}>
              <ProjectCardSkeleton />
            </ProjectCardContainer>
          ))}
        {data.map((data) => (
          <ProjectCardContainer key={data.id}>
            <ProjectCard project={data} />
          </ProjectCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
