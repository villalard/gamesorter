import { Card, Image } from "@chakra-ui/react";
import { Projects } from "./ContentfulContent";

interface Props {
  project: Projects;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <Card onClick={onClick}>
      <Image src={project.thumbnail.url} alt="{project.title}" />
    </Card>
  );
};

export default ProjectCard;
