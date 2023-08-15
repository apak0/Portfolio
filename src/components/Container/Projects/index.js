import React from 'react';
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';



const ProjectCard = ({ imageSrc, title, description, technologies }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" border={"none"}  mt={5} textColor={"white"} >
      <Image src={imageSrc} alt={title}  className='m-auto'/>
      <Text fontSize="xl" mt={2}>
        {title}
      </Text>
      <Text mt={2}>{description}</Text>
      <Text mt={4} fontWeight="bold">
        Technologies:
      </Text>
      <Text>{technologies.join(', ')}</Text>
    </Box>
  );
};

const ProjectList = () => {



  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: "/src/assets/images/project-2.png", // Replace with actual image source
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: 'https://picsum.photos/200', // Replace with actual image source
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: 'https://picsum.photos/200', // Replace with actual image source
    },
    // Add more projects as needed
  ];

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} minHeight="100vh"  display={"flex"} justifyContent={"center"} alignItems={"center"} bg="#262626" >
      {projects.map((project, index) => (
        <GridItem key={index}>
          <ProjectCard {...project} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectList;
