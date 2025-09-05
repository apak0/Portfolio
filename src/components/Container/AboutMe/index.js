import React, { useEffect } from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import RotatingText from "./RotatingText";
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
      <Container maxW="xl" className="animate-me-up">
        <Heading as="h2" size="xl" mb="4">
          About Me
        </Heading>

        <Text
          fontSize="lg"
          className="flex justify-center items-center flex-wrap"
        >
          Hi there! I'm Muhammed Apak, a{" "}
          <RotatingText
            texts={["passionate", "proactive", "collaborative"]}
            mainClassName="bg-[#5227ff] text-white px-2 sm:px-2 md:px-3 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg ml-2 font-bold"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0. }
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          web developer with a strong background in building user-friendly and
          functional websites. I love diving into new technologies and
          frameworks to create exciting and innovative projects.
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
