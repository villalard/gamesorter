import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Projects } from "./ContentfulContent";

interface Props {
  project: Projects;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card>
      <Image src={project.thumbnail.url} alt="{project.title}" />
      <CardBody>
        <Heading fontSize="small">{project.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
