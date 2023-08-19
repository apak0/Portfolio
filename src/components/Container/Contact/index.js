import React from 'react';
import { Box, Container, Heading, Text, Link, Icon, Flex } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaInstagram,  } from 'react-icons/fa';


const Contact = () => {
  return (
    <Box
      bg="#262626"
      color="white"
      py="20"
      textAlign="center"
      className='h-screen flex items-center'
    >
      <Container maxW="xl" bgGradient="linear(to-r, teal.500, blue.500)"  bgClip={"text"}>
        <Heading  as="h2" size="xl" mb="4"  >
          <Text >

          Contact Me
          </Text>
        </Heading>
        
        <Flex justifyContent="center" mb="4" color={"teal.200"} bgClip={""}  >
          <Link e-mail  href="mailto:muhampak25@mail.com" isExternal mx="2" _hover={{color:"aqua"}} >
            <Icon as={FaEnvelope} boxSize="20" />
          </Link>
          <Link href="https://github.com/apak0" isExternal mx="2" textDecoration={"underline"} _hover={{color:"aqua"}}>
            <Icon as={FaGithub} boxSize="20" />
          </Link>
          <Link href="https://www.instagram.com/yourusername" isExternal mx="2" _hover={{color:"aqua"}}>
            <Icon as={FaInstagram} boxSize="20" />
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