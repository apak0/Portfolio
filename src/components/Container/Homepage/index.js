import React from "react";
import PhotoOfMami from "../../../assets/images/profilePhoto-12.png";
import "./style.css";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div
      id="homepage"
      className="text-center flex justify-center h-screen "
      
    >
      <motion.Box className="flex relative " initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
       transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 }
}}
      exit={{ opacity: 0 }}>
        <Image src={PhotoOfMami} objectFit={"cover"} />
        <motion.Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-32 ml-5"
        initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
       transition={{
        ease: "easeInOut",
        duration: 4,
        x: { duration: 1 }
      }}
      exit={{ opacity: 0 }}
      >
          <Text className="text-5xl text-white text-opacity-80  ">
            Hello, I'm
          </Text>
          <Text
            id="name-surname"
            className="text-5xl font-extrabold  text-gray-200 tracking-widest  "
          >
            Muhammed Apak
          </Text>
          <Text className="text-m text-white text-opacity-80 mt-10 tracking-widest ">
            AND THIS IS MY RESUME
          </Text>
        </motion.Box>
      </motion.Box>
    </div>
  );
}

export default HomePage;
