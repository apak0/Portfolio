import React, { useState, useEffect } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import "./style.css";

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
    <Box className="absolute w-full sm:mt-16 mt-10 z-10 ">
      <Flex
        className="sm:justify-center justify-between bg-transparent text-3xl font-bold text-cyan-500 text-opacity-30"
        // Uygun hizalamayı ayarlayın
      >
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
              _hover={"none"}
            />
          </motion.div>
        ) : (
          <Flex align="center" as="ul" listStyleType="none">
            <NavItem to="projects" label="Projects" />
            <NavItem to="aboutme" label="About Me" />
            <NavItem to="contact" label="Contact" />
          </Flex>
        )}
      </Flex>

      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0, maxHeight: 0, fontSize: "1rem" }}
          animate={{ opacity: 1, maxHeight: "100vh", fontSize: "1rem" }} // Font büyüklüğü değiştirilmedi
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{ duration: 0.3 }}
          className={`mobile-menu ${isOpen ? "open" : ""}`}
        >
          <Box
            p="4"
            pt={20}
            pl={10}
            display={{ base: "block", md: "none" }}
            bg="linear-gradient(to bottom, rgba(33, 147, 176, 1), rgba(109, 213, 237, 1))"
            color="#94716b"
            listStyleType={"none"}
            fontSize={"4xl"}
            height={"80vh"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRightRadius={"full"}
          >
            <NavItem to="projects" label="Projects" />
            <NavItem to="aboutme" label="About Me" />
            <NavItem to="contact" label="Contact" />
          </Box>
        </motion.div>
      )}
    </Box>
  );
}

function NavItem({ to, label }) {
  return (
    <Box as="li" className="mx-0 md:mx-4 mb-10">
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
