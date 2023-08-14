import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <Box className="absolute w-full mt-16 z-10  " >
      <Box className="flex justify-center bg-transparent text-3xl font-bold text-white text-opacity-30   ">
        <ul className="flex">
          <li>
            <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
              <Link to="/" smooth={true}>
                Home Page
              </Link>
            </Text>
          </li>
          <li>
            <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
              <Link to="projects" smooth={true}>
                Projects{" "}
              </Link>
            </Text>
          </li>
          <li>
            <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
              <Link to="aboutme" smooth={true}>
                About Me{" "}
              </Link>
            </Text>
          </li>
          <li>
            <Text className="ml-12  hover:text-neutral-100 hover:text-opacity-90 transition ease-in-out  duration-500 hover:scale-110">
              <Link to="contact" smooth={true}>
                Contact{" "}
              </Link>
            </Text>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default Navbar;
