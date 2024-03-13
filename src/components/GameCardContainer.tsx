import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={5} overflow="hidden" width={"100%"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
