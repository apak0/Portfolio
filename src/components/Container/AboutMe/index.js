import React, { useEffect } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import "./style.css";

const AboutMe = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll(".animate-me-up");

    const handleScroll = () => {
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.style.transform = "translateY(0)"; // Nesneyi yukarı kaydır
          element.style.opacity = 1; // Saydamlığı kaldır
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // İlk yüklemede de çalıştırmak için
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      className="aboutMeComponent"
      
      color="white"
      py="20"
      textAlign="center"
      minH={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container maxW="xl" className="animate-me-up ">
        <Heading as="h2" size="xl" mb="4">
          About Me
        </Heading>
        <Text fontSize="lg">
          Hi there! I'm Muhammed Apak, a passionate web developer with a strong
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
