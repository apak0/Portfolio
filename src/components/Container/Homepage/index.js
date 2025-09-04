import React from "react";
import PhotoOfMami from "../../../assets/images/profilePhoto-12.png";
import "./style.css";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Cover } from "../../ui/Cover.tsx";
import DarkVeil from "./DarkEvil.js";

function HomePage() {
  return (
    <div id="homepage" className="relative w-full h-screen overflow-hidden">
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={PhotoOfMami}
          className="mx-auto w-2/3 h-full object-cover object-center"
          objectFit="cover"
          objectPosition="center"
          boxSize="100vh"
          filter="brightness(0.9)"
        />
      </motion.div>

      {/* Dark Veil Layer */}
      <div className="absolute inset-0 z-0 opacity-80">
        <DarkVeil />
      </div>

      {/* Content Layer */}
      <motion.div
        className="relative z-30 w-full h-full flex items-center justify-center mt-64"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Text className="text-6xl text-white text-opacity-90 mb-4">
              Hello, I'm
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Text
              id="name-surname"
              className="text-7xl font-extrabold text-white tracking-widest mb-8"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Muhammed Apak
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <Text className="text-xl text-white text-opacity-90 tracking-widest">
              AND THIS IS <Cover>MY RESUME</Cover>
            </Text>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
