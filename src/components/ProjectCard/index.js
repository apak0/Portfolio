import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text } from '@chakra-ui/react';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Image src={project.coverImage} alt={project.title} />

        <Box p="6">
          <Text fontSize="xl" fontWeight="semibold">
            {project.title}
          </Text>
          <Text mt="2" color="gray.500">
            {project.description}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectCard;