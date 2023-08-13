import React from "react";
import { Box, Text, } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Box className="absolute w-full mt-16">
      <Box className="flex justify-center bg-transparent text-3xl font-bold text-white text-opacity-30   ">
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <NavLink to="/">Home Page</NavLink>
        </Text>
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <NavLink to="/projects">Projects</NavLink>
        </Text>
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <NavLink to="/aboutme">About Me</NavLink>
        </Text>
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <NavLink to="/aboutme">Contact</NavLink>
        </Text>
      </Box>
    </Box>
  );
}

export default Navbar;
