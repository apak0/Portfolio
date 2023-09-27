/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import {  Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import "./style.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false);
    }
  };

  const handleOutsideClick = (e) => {
    if (isOpen && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <Box className="absolute w-full sm:mt-16 mt-10 z-10 ">
      <Flex
        className="sm:justify-center justify-between bg-transparent text-3xl font-bold text-cyan-500 text-opacity-30"
      >
        {isMobile ? (
          <div 
          ref={menuRef}>
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={() => setIsOpen(!isOpen)}
              size="xl"
              variant="ghost"
              display={{ base: "flex", md: "none" }}
              color={"orange.400"}
              ml={5}
              position={"absolute"}
              mt={5}
              _hover={{ bg: "transparent" }} // Tıklama efekti için rengi belirtin
  _focus={{ outline: "none" }} // Varsayılan tıklama vurgusunu ka
            />
          </div>
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
         
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          ref={menuRef} // add menü ref
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
           transition={{
            ease: "linear",
            
            
          }}
          exit={{ opacity: 1 }}
          >
          <Box
            p="4"
            pt={20}
            pl={10}
            display={{ base: "grid", md: "none" }}
            bg="#64CCC5"
            color="#94716b"
            listStyleType={"none"}
            fontSize={"4xl"}
            height={"60vh"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRightRadius={"full"}
            onClick={(e) => e.stopPropagation()} //When click out of the menu it will be closed
            className="hamburgerMenuInside"
            overflow={"hidden"}
            maxW={"50vh"}
            
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
    <motion.Box as="ul" className="mx-0 md:mx-4 mb-10" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
       transition={{
        ease: "linear",
        duration: 1,
        x: { duration: 1 }
      }}
      exit={{ opacity: 1 }}
      
      >
      <Link
        to={to}
        smooth={true}
        className="text-gray-50 hover:text-orange-400 transition duration-300 transform hover:scale-125"
      >
        {label}
      </Link>
    </motion.Box>
  );
}

export default Navbar;
