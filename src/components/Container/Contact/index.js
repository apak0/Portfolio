import React from 'react';
import { Box, Container, Heading, Text, Link, Icon, Flex } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box
      bg="#262626"
      color="white"
      py="20"
      textAlign="center"
      className='h-screen flex items-center'
    >
      <Container maxW="xl" bgGradient="linear(to-r, teal.500, blue.500)" bgClip={"text"}>
        <Heading  as="h2" size="xl" mb="4"  >
          <Text >

          Contact Me
          </Text>
        </Heading>
        <Flex justifyContent="center" mb="4">
          <Link href="mailto:example@example.com" isExternal mx="2">
            <Icon as={FaEnvelope} boxSize="6" />
          </Link>
          <Link href="https://github.com/yourusername" isExternal mx="2">
            <Icon as={FaGithub} boxSize="6" />
          </Link>
          <Link href="https://www.instagram.com/yourusername" isExternal mx="2">
            <Icon as={FaInstagram} boxSize="6" />
          </Link>
        </Flex>
        <Text fontSize="lg">
          Feel free to contact me through email, check out my projects on GitHub,
          or connect with me on Instagram.
        </Text>
      </Container>
    </Box>
  );
};

export default Contact;