import React, { useState, useEffect } from "react";
import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
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
    <Box className="absolute w-full mt-16 z-10">
    <Flex
      className="flex bg-transparent text-3xl font-bold text-cyan-500 text-opacity-30"
      justifyContent="space-between" // Uygun hizalamayı ayarlayın
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

          
        />
      ) : (
        <Flex align="center" as="ul" listStyleType="none" >
          <NavItem to="/" label="Home Page" />
          <NavItem to="projects" label="Projects" />
          <NavItem to="aboutme" label="About Me" />
          <NavItem to="contact" label="Contact" />
        </Flex>
      )}
    </Flex>
  
    {isMobile && isOpen && (
      <Box
        p="4"
        mt="4"
        
        display={{ base: "block", md: "none" }}
        bg="linear-gradient(to bottom, #2193b0, #6dd5ed)"
        color="#94716b"
        listStyleType={"none"}
        fontSize={"2xl"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        
      >
        {/* Mobil menü içeriği */}
        <NavItem  to="/" label="Home Page" />
        <NavItem  to="projects" label="Projects" />
        <NavItem to="aboutme" label="About Me" />
        <NavItem to="contact" label="Contact" />
      </Box>
    )}
  </Box>
  
  );
}

function NavItem({ to, label }) {
  return (
    <Box as="li" mx={{ base: 0, md: 4 }}>
      <Text className="hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out duration-500 hover:scale-110">
        <Link to={to} smooth={true}>
          {label}
        </Link>
      </Text>
    </Box>
  );
}

export default Navbar;
