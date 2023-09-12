import React, { useEffect } from 'react';
import { Box, Container, Heading, Text, Link, Icon, Flex } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaInstagram,  } from 'react-icons/fa';
import "./style.css";



const Contact = () => {

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-me-contact');
    
    const handleScroll = () => {
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight) {
          element.style.transform = 'translateY(0)'; // Move the object to the left
          element.style.opacity = 1; // Change the opacity to 1
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Only working for component mounting
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <Box
      bg="#262626"
      color="white"
      py="20"
      textAlign="center"
      className='h-screen flex items-center '
    >
      <Container maxW="xl" bgGradient="linear(to-r, teal.500, blue.500)"  bgClip={"text"} className='animate-me-contact'>
        <Heading  as="h2" size="xl" mb="4"  >
          <Text >

          Contact Me
          </Text>
        </Heading>
        
        <Flex justifyContent="center" mb="4" color={"teal.200"} bgClip={""}  className='animate-me-top' >
          <Link e-mail  href="mailto:muhampak25@mail.com" isExternal mx="2" _hover={{color:"aqua"}} >
            <Icon as={FaEnvelope} boxSize="20" />
          </Link>
          <Link href="https://github.com/apak0" isExternal mx="2" textDecoration={"underline"} _hover={{color:"aqua"}}>
            <Icon as={FaGithub} boxSize="20" />
          </Link>
          <Link href="https://www.instagram.com/m_apak_" isExternal mx="2" _hover={{color:"aqua"}}>
            <Icon as={FaInstagram} boxSize="20" />
          </Link>
        </Flex>
        <Box >
        <Text fontSize="lg"  >
          Feel free to contact me through email, check out my projects on GitHub,
          or connect with me on Instagram.
        </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;