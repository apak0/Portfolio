import React from "react";
import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import project1 from "../../../assets/images/project-1.png";
import project2 from "../../../assets/images/project-2.png";
import project3 from "../../../assets/images/project-3.png";
import LinesEllipsis from "react-lines-ellipsis";
import Atropos from "atropos/react";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  technologies,
  hrefLink,
}) => {
  return (
    <Box display={"flex"} alignItems={"center"} m={10} >
   
      <Card maxW="sm" bg={"rgba(158, 159, 165, 0.5)"}>
        <CardBody>
        <LinkBox as="article" rounded="md">
          <LinkOverlay href={hrefLink} target="_blank">
            <Image
              src={imageSrc}
              alt={title}
              loading="lazy"
              width="100%"
              height="200px"
              objectFit="cover"
            />
          </LinkOverlay>
          </LinkBox>
          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              borderBottom={"1px"}
              borderColor={"gray.400"}
              mx={"auto"}
              pb={5}
            >
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
      </Card>
    
    </Box>
  );
};

const ProjectList = () => {
  const projects = [
    {
      title: "E-Commerce App",
      description:
        "Explore a seamless shopping journey like never before on our Online Marketplace, where you can discover a wide range of products and enjoy hassle-free online shopping.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project3, // Replace with actual image source
      hrefLink: "https://bizim.onrender.com/",
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
      title: "SahanePazar Color Game",
      description:
        "Experience the excitement as you uncover the elusive blue box among a set of mystery boxes in this engaging web-based puzzle game.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project1, // Replace with actual image source
      hrefLink: "https://sahane-pazar-box-game.web.app/",
    },

    // Add more projects as needed
  ];

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-b, rgba(249, 76, 16, 0.7), teal.500)"
      className="md:h-screen"
    >
      {projects.map((project, index) => (
        <Box margin={5} mb={20}>
          <Atropos shadow={false} className="my-atropos">
            <ProjectCard {...project} />
          </Atropos>
        </Box>
      ))}
    </Flex>
  );
};

export default ProjectList;
