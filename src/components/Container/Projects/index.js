import React from 'react'
import { Box, Text, Grid, GridItem, Image, AspectRatio, Link, Card, CardBody, Stack, Heading, Divider, Flex } from '@chakra-ui/react';
import project1 from "../../../assets/images/project-1.png"
import project2 from "../../../assets/images/project-2.png"
import project3 from "../../../assets/images/project-3.png"



const ProjectCard = ({ imageSrc, title, description, technologies, hrefLink }) => {
  return (
   <Box>
    <Card maxW='sm'>
  <CardBody>
  <Link href={hrefLink} target='_blank' >
  <Image
              src={imageSrc}
              alt={title}
              loading="lazy"
              borderRadius="lg"
              width="100%" // Resmi genişliği kutunun genişliği kadar
              height="200px" // Belirlediğiniz istediğiniz yükseklik
              objectFit="cover" // Resim boyutunu korurken gerektiğinde kırpabilir
            />
    </Link>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
   </Box>
  );
};

const ProjectList = () => {
  const projects = [
    {
      title: 'SahanePazar Color Game',
      description: 'Description of Project 1.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project1 ,// Replace with actual image source
      hrefLink: "https://sahane-pazar-box-game.web.app/",
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project2, // Replace with actual image source
      hrefLink:"https://apakweatherapp.netlify.app/",
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      technologies: ['React', 'Chakra UI', 'Tailwind CSS'],
      imageSrc: project3, // Replace with actual image source
      hrefLink: "https://bizim.onrender.com/",
    },
    // Add more projects as needed
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" bg="#262626">
    {projects.map((project, index) => (
      <Box key={index} mx={4} my={6} flex="1 0 300px" maxWidth="300px">
        <ProjectCard {...project} />
      </Box>
    ))}
  </Flex>
  );
};

export default ProjectList;
