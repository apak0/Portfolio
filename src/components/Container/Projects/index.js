import React from 'react';
import { Box, Text, Grid, GridItem, Image, AspectRatio } from '@chakra-ui/react';
import project1 from "../../../assets/images/project-1.png"
import project2 from "../../../assets/images/project-2.png"
import project3 from "../../../assets/images/project-3.png"




const ProjectCard = ({ imageSrc, title, description, technologies }) => {
  return (
    <Box borderWidth="1px" overflow="hidden" border="none" textColor="white" bg="#F6F4EB" py={2} px={2}>
    <AspectRatio ratio={4 / 3}>
      <Image src={imageSrc} alt={title} loading="lazy" objectFit="cover" />
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
      imageSrc: project1 // Replace with actual image source
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project2, // Replace with actual image source
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project3, // Replace with actual image source
    },
    // Add more projects as needed
  ];

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} minHeight="100vh"  display={"flex"} justifyContent={"center"} alignItems={"center"} bg="#262626"  >
      {projects.map((project, index) => (
        <GridItem key={index} mx={5} >
          <ProjectCard {...project} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectList;
