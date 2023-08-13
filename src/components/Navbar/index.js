import React from 'react'
import { Box, Button } from '@chakra-ui/react'

function Navbar() {
  return (
    <Box>
      <Box >
        <Button to={"/"}>Home Page</Button>
        <Button to="/projects" >Project</Button>
        <Button to="/aboutme" >About Me</Button>
      </Box>
    </Box>
  )
}

export default Navbar