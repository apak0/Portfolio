import React from 'react';
import { Box, Text, Grid, GridItem, Image, AspectRatio, Link } from '@chakra-ui/react';
import project1 from "../../../assets/images/project-1.png"
import project2 from "../../../assets/images/project-2.png"
import project3 from "../../../assets/images/project-3.png"

const ProjectCard = ({ imageSrc, title, description, technologies, hrefLink }) => {
  return (
    <Box borderWidth="1px" overflow="hidden" border={"none"} borderRadius={"2xl"} textColor="white" bg="#F11A7B" py={2} px={2} w="100%">
      <AspectRatio ratio={4 / 3} >
        <Link href={hrefLink} target='_blank' >
        <Image src={imageSrc} alt={title} loading="lazy" objectFit="cover" borderTopRadius={"2xl"}  />
        </Link>
      </AspectRatio>
      <Text fontSize="xl" mt={2} textColor="#EAC696">
        {title}
      </Text>
      <Text mt={2} textColor="#C8AE7D">
        {description}
      </Text>
      <Text mt={4} textColor="#765827" fontWeight="bold">
        Technologies:
      </Text>
      <Text>{technologies.join(', ')}</Text>
    </Box>
  );
};

const ProjectList = () => {
  const projects = [
    {
      title: 'SahanePazar Color Game',
      description: 'Description of Project 1.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project1 ,// Replace with actual image source
      hrefLink: "https://sahane-pazar-box-game.web.app/",
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project2, // Replace with actual image source
      hrefLink:"https://apakweatherapp.netlify.app/",
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project3, // Replace with actual image source
      hrefLink: "https://bizim.onrender.com/",
    },
    // Add more projects as needed
  ];

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} minHeight="100vh" display="flex" justifyContent="center" alignItems="center" bg="#262626">
      {projects.map((project, index) => (
        <GridItem key={index} mx={5} colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}>
          <ProjectCard {...project} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectList;
