import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Projects } from "./ContentfulContent";

interface Props {
  project: Projects;
  onClick: () => void;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card>
      <Image src={project.thumbnail.url} alt="{project.title}" />
    </Card>
  );
};

export default ProjectCard;
