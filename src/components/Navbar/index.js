import React, { useState, useEffect } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false); // Mobil menüyü kapat
    }
  };

  useEffect(() => {
    handleResize(); // Sayfa yüklendiğinde ekran genişliğini kontrol et
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="absolute w-full  sm:mt-16 mt-0 z-10  ">
      <Flex
        className=" sm:justify-center justify-between  bg-transparent text-3xl font-bold text-cyan-500 text-opacity-30"
         // Uygun hizalamayı ayarlayın
      >
        {isMobile ? (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={() => setIsOpen(!isOpen)}
            size="xl"
            variant="ghost"
            display={{ base: "flex", md: "none" }}
            color={"crimson"}
            ml={5}
            position={"absolute"}
            mt={5}
            
          />
        ) : (
          <Flex align="center" as="ul" listStyleType="none">
            
            <NavItem to="projects" label="Projects" />
            <NavItem to="aboutme" label="About Me" />
            <NavItem to="contact" label="Contact" />
          </Flex>
        )}
      </Flex>

      {isMobile && isOpen && (
        <Box
          p="4"
          pt={20}
          pl={10}
          display={{ base: "block", md: "none" }}
          bg="linear-gradient(to bottom, rgba(33, 147, 176, 1), rgba(109, 213, 237, 0.9))"
          color="#94716b"
          listStyleType={"none"}
          fontSize={"6xl"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
          
          
        >
          {/* Mobil menü içeriği */}
          
          <NavItem to="projects" label="Projects" />
          <NavItem to="aboutme" label="About Me" />
          <NavItem to="contact" label="Contact" />
        </Box>
      )}
    </Box>
  );
}

function NavItem({ to, label }) {
  return (
    <Box as="li" className="mx-0 md:mx-4">
      <Link
        to={to}
        smooth={true}
        className="text-gray-50 hover:text-orange-200 transition duration-300 transform hover:scale-125"
      >
        {label}
      </Link>
    </Box>
  );
}

export default Navbar;
