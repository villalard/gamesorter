import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={5} overflow="hidden">
      <Image src={game.background_image} alt="{game.name}" />
      <CardBody>
        <Heading fontSize="small">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
