import React from "react";
import { Box, Button, Text, Link, Img, Image } from "@chakra-ui/react";


function Navbar() {
  return (
    <Box className="absolute w-full mt-10" >
      
      <Box className="flex justify-center bg-transparent text-lg font-bold text-zinc-400 ">
        <Text className="mr-20">
          <Link href="/">Home Page</Link>
        </Text>
        <Text className="mr-20">
          <Link  href="/projects">Projects</Link>
        </Text>
        <Text className="mr-20">
          <Link href="/aboutme">About Me</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Navbar;
