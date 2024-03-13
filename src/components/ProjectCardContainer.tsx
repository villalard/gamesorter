import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const ProjectCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={0} width={"100%"}>
      {children}
    </Box>
  );
};

export default ProjectCardContainer;
