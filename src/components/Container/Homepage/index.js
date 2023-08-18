import React from "react";
import PhotoOfMami from "../../../assets/images/profilePhoto-4.png";
import "./style.css";
import { Image } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    
    <div id="homepage" className="text-center flex justify-center h-screen ">
      <Box className="flex relative ">
        <Image src={PhotoOfMami} objectFit={"cover"} />
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-32 ml-5">
          <Text className="text-3xl text-white text-opacity-80 ">
            Hello, I'm
          </Text>
          <Text
            id="name-surname"
            className="text-5xl font-extrabold  text-gray-200 tracking-widest  "
          >
            Muhammed Apak
          </Text>
          <Text className="text-m text-white text-opacity-80 mt-10">
            AND THIS IS MY RESUME
          </Text>
        </Box>
      </Box>
    </div>

    
  );
}

export default HomePage;
