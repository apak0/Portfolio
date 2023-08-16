import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  AspectRatio,
  Link,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Flex,
} from "@chakra-ui/react";
import project1 from "../../../assets/images/project-1.png";
import project2 from "../../../assets/images/project-2.png";
import project3 from "../../../assets/images/project-3.png";
import LinesEllipsis from "react-lines-ellipsis";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  technologies,
  hrefLink,
}) => {
  return (
    <Box >
      <Card maxW="sm">
        <CardBody>
          <Link href={hrefLink} target="_blank">
            <Image
              src={imageSrc}
              alt={title}
              loading="lazy"
              borderRadius="lg"
              width="100%" // Resmi genişliği kutunun genişliği kadar
              height="200px" // Belirlediğiniz istediğiniz yükseklik
              objectFit="cover" // Resim boyutunu korurken gerektiğinde kırpabilir
            />
          </Link>
          <Stack mt="6" spacing="3">
            <Heading size="md" borderBottom={"1px"} borderColor={"gray.300"}>
              {" "}
              {title}{" "}
            </Heading>
            <Text>
              <LinesEllipsis
                text={description}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Box>
  );
};

const ProjectList = () => {
  const projects = [
    {
      title: "SahanePazar Color Game",
      description:
        "Experience the excitement as you uncover the elusive blue box among a set of mystery boxes in this engaging web-based puzzle game.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project1, // Replace with actual image source
      hrefLink: "https://sahane-pazar-box-game.web.app/",
    },
    {
      title: "Weather App",
      description:
        "Discover real-time weather updates and stay informed about current conditions with the Weather Insight App.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project2, // Replace with actual image source
      hrefLink: "https://apakweatherapp.netlify.app/",
    },
    {
      title: "E-Commerce App",
      description:
        "Explore a seamless shopping journey like never before on our Online Marketplace, where you can discover a wide range of products and enjoy hassle-free online shopping.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project3, // Replace with actual image source
      hrefLink: "https://bizim.onrender.com/",
    },
    // Add more projects as needed
  ];

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      bg="#262626"
    >
      {projects.map((project, index) => (
        <Box key={index} mx={5} my={6} flex="1 0 300px" maxWidth="300px">
          <ProjectCard {...project} />
        </Box>
      ))}
    </Flex>
  );
};

export default ProjectList;
