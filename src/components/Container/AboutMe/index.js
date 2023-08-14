import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      py="20"
      textAlign="center"
    >
      <Container maxW="xl">
        <Heading as="h2" size="xl" mb="4">
          About Me
        </Heading>
        <Text fontSize="lg">
          Hi there! I'm [Your Name], a passionate web developer with a strong
          background in building user-friendly and functional websites. I love
          diving into new technologies and frameworks to create exciting and
          innovative projects.
        </Text>
        <Text fontSize="lg" mt="4">
          With a keen eye for design and attention to detail, I aim to deliver
          elegant and visually appealing web applications. My expertise includes
          working with HTML, CSS, JavaScript, React, and other modern web
          technologies.
        </Text>
        <Text fontSize="lg" mt="4">
          When I'm not coding, you can find me exploring the outdoors, reading
          books, or enjoying a good cup of coffee.
        </Text>
      </Container>
    </Box>
  );
};

export default AboutMe;
