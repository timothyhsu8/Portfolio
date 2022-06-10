import { Avatar, Box, Heading, Icon, Text, VStack, HStack, Image, Center, Stack, Button } from "@chakra-ui/react";
import Project from "./components/Project";
import './styles.css'

function App() {
  return (
    <Box>
      <Box className="wrapper">
        {/* Landing Screen */}
        <header>
          <img src="imgs/mountains.jpg" className="background"></img>
          {/* <img src="imgs/catra.webp" className="foreground"></img> */}
          <VStack spacing={4}>
            <Heading size="3xl" color="white"> Timothy Hsu </Heading>
            <Heading size="xl" color="white" fontWeight="thin"> Web Developer </Heading>
          </VStack>
        </header>

        {/* Projects */}
        <Box bgColor="white" p={5} height="100vh">
          <Center>
            <VStack w="100%" spacing={5} mt="30px" mb="60px">
              <Heading size="2xl" fontWeight="bold" color="gray.700"> 
                Projects
              </Heading>
              <Box w={250} h="2px" bgColor="gray.300" />
            </VStack>
          </Center>

          <VStack spacing={40}>
            {/* Trivia Tree */}
            <Project 
              name="Trivia Tree" 
              tag="Community-driven quizzing website" 
              description="Take quizzes created by other community members or create your own and share them with the world"
              img="imgs/triviatree_page.png"
              logo="imgs/triviatree_icon.png"
              url="https://triviatree.herokuapp.com/"
              titleColor="red.700"
              tagColor="yellow.700"
            />

            {/* Art Discover */}
            <Project 
              name="Art Discover" 
              tag="Discover professional artwork" 
              description="Find artwork from professional artists and educational art resources to help you improve your own skills"
              img="imgs/artdiscover_page.png"
              logo="imgs/artdiscover_icon.png"
              url="https://art-discover.herokuapp.com/"
              titleColor="blue.600"
              tagColor="cyan.700"
            />

            {/* Wavelength */}
            <Project 
              name="Wavelength" 
              tag="Multiplayer board game" 
              description='Play a simplified version of the board game Wavelength online with your friends!'
              img="imgs/wavelength_page.png"
              logo="imgs/wavelength_icon.png"
              url="https://art-discover.herokuapp.com/"
              titleColor="purple.600"
              tagColor="pink.700"
            />

            {/* Rage of the Sea */}
            {/* <Project 
              name="Rage of the Sea" 
              tag="2D Rogue-like Game" 
              description='Play as the diver and fight through 7 floors of enemies to escape a sinking cruise ship. Finalist at the 2021 Stony Brook University Game Programming Competition'
              img="imgs/rots_page.png"
              logo="imgs/rots_icon.png"
              url="https://rage-of-the-sea.firebaseapp.com/"
              titleColor="facebook.400"
              tagColor="blue.500"
            /> */}
          </VStack>

          <Box h="30vh"/>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
