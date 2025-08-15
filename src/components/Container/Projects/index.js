import React, { useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project1 from "../../../assets/images/project-1.png";
import project2 from "../../../assets/images/project-2.png";
import project3 from "../../../assets/images/project-3.png";
import project4 from "../../../assets/images/project-4.png";
import project5 from "../../../assets/images/project-5.png";
import project6 from "../../../assets/images/project-6.png";
import project7 from "../../../assets/images/project-7.png";
import project8 from "../../../assets/images/project-8.png";
import project9 from "../../../assets/images/project-9.png";
import project10 from "../../../assets/images/project-10.png";

import LinesEllipsis from "react-lines-ellipsis";
import Atropos from "atropos/react";
import "./style.css";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  technologies,
  hrefLink,
}) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      {/* Make the entire Card clickable */}
      <LinkBox as="article" rounded="md" width="100%">
        <Card
          maxW="sm"
          bg={"rgba(158, 159, 165, 0.5)"}
          transform="scale(1)" // Default scale
          transition="transform 0.3s ease-in-out" // Smooth transition for both hover in and out
          _hover={{
            transform: "scale(1.1)", // Scales the card when hovered
            transition: "transform 0.3s ease-in-out", // Adds smooth transition effect
          }}
        >
          <CardBody>
            <LinkOverlay href={hrefLink} target="_blank">
              {" "}
              {/* Link applied to the whole card */}
              <Atropos shadow={false} className="my-atropos">
                <Image
                  src={imageSrc}
                  alt={title}
                  loading="lazy"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                />
              </Atropos>
              <Stack mt="6" spacing="3">
                <Heading
                  size="md"
                  borderBottom={"1px"}
                  borderColor={"gray.400"}
                  mx={"auto"}
                  fontStyle={"italic"}
                  pb={5}
                  color={"#DEE5D4"}
                >
                  {title}
                </Heading>
                <Text className="text-xl font-bold">
                  <LinesEllipsis
                    text={description}
                    maxLine="3"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </Text>
              </Stack>
            </LinkOverlay>
          </CardBody>
        </Card>
      </LinkBox>
    </Box>
  );
};

const ProjectList = () => {
  const projects = [
    {
      title: "Mythic Realms",
      description:
        "This website is designed as an immersive hub for an online MMORPG game, featuring player profiles, rankings, and interactive community sections. It delivers a modern, responsive interface to enhance engagement and provide a seamless gaming experience",
      technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
      imageSrc: project10,
      hrefLink: "https://mythic-realms.netlify.app//",
    },
    {
      title: "E-Commerce App",
      description:
        "Explore a seamless shopping journey like never before on our Online Marketplace, where you can discover a wide range of products and enjoy hassle-free online shopping.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project3,
      hrefLink: "https://bizim.onrender.com/",
    },

    {
      title: "Weather App",
      description:
        "Discover real-time weather updates and stay informed about current conditions with the Weather Insight App.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project2,
      hrefLink: "https://apakweatherapp.netlify.app/",
    },
    {
      title: "SahanePazar Color Game",
      description:
        "Experience the excitement as you uncover the elusive blue box among a set of mystery boxes in this engaging web-based puzzle game.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project1,
      hrefLink: "https://sahane-pazar-box-game.web.app/",
    },
    {
      title: "Two Tea",
      description:
        "Streamline your office beverage orders with our easy-to-use application for coffee and tea requests.",
      technologies: [
        "React",
        "Chakra UI",
        "Tailwind CSS",
        "Express",
        "MongoDB",
      ],
      imageSrc: project4,
      hrefLink: "https://twotea.onrender.com/",
    },
    {
      title: "SahanePazar Color Game V2",
      description:
        "A fast-paced color memory game where players must find the correct colored box under pressure. Test your reflexes and visual memory in this fun and addictive challenge!.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project5,
      hrefLink: "https://sahane-pazar-box-game-v2.netlify.app/",
    },

    // asdasd ada
    {
      title: "Puzzle Strike",
      description:
        "Stylish logic-based puzzle game where you match shapes and colors to unlock new levels. Easy to play, hard to master — a true test of your strategic thinking.",
      technologies: ["React", "Chakra UI", "Tailwind CSS"],
      imageSrc: project6,
      hrefLink: "https://puzzlestrike.netlify.app/",
    },
    {
      title: "Delicious Bite",
      description:
        "An elegant restaurant e-commerce web app where users can browse menus, place orders, and discover new meals. Built for a smooth and modern food ordering experience",
      technologies: ["React", "Chakra UI", "Tailwind CSS, Supabase"],
      imageSrc: project7,
      hrefLink: "https://delicious-bite-restaurant.netlify.app/",
    },
    {
      title: "Kingdom of Harpoon",
      description:
        "A fantasy-themed chess game with immersive visuals and strategic chess game. Rule the board with tactical moves in a kingdom where every piece has its purpose.",
      technologies: ["React", "Chakra UI", "Tailwind CSS, Socket.io, Supabase"],
      imageSrc: project8,
      hrefLink: "https://kingdom-of-harpoon.netlify.app/",
    },
    {
      title: "Logistic Pro",
      description:
        "An intelligent logistics management app designed to streamline shipping, tracking, and delivery processes. Perfect for businesses seeking efficiency, real-time updates, and full control over their logistics operations.",
      technologies: ["React", "Tailwind CSS", "Framer motion", "Chakra UI"],
      imageSrc: project9,
      hrefLink: "https://logistic-pro.netlify.app/",
    },

    // Add more projects as needed
  ];

  useEffect(() => {
    const animateElements = document.querySelectorAll(".animate-me-projects");

    const handleScroll = () => {
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.style.transform = "translateY(0)"; // Move the object to the left
          element.style.opacity = 1; // Change the opacity to 1
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Only working for component mounting
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      as="section"
      className="md:h-full projectsComponent"
      py={20}
      px={4}
    >
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          size="2xl"
          mb={10}
          textAlign="center"
          className="text-4xl font-bold"
          color={"#DEE5D4"}
        >
          Projects
        </Heading>
        <Box px={10} py={10}>  {/* Added padding around the slider */}
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div className="animate-me-projects my-5" key={index}>
                <Box px={10}>  {/* Added horizontal padding for each card */}
                  <ProjectCard {...project} />
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectList;
