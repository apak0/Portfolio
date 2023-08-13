import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";


function Navbar() {
  return (
    <Box className="absolute w-full mt-16">
      <Box className="flex justify-center bg-transparent text-3xl font-bold text-white text-opacity-30   ">
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <Link to="/">Home Page</Link>
        </Text>
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <Link to="/projects">Projects</Link>
        </Text>
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <Link to="/aboutme">About Me</Link>
        </Text>
        <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
          <Link to="/aboutme">Contact</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Navbar;
