import { Avatar, Box, Heading, Icon, Text, VStack, HStack, Image, Center, Stack, Button } from "@chakra-ui/react";
import Project from "./components/Project";
import SectionHeading from "./components/SectionHeading";
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
            <Heading fontWeight="normal" color="white"> Hi, I'm </Heading>
            <Heading size="3xl" color="white"> Timothy Hsu </Heading>
            <Heading size="xl" color="white" fontWeight="thin"> Web Developer </Heading>
            {/* <Heading size="xl" color="white" fontWeight="thin"> Web Developer </Heading> */}
          </VStack>
        </header>


        <Box bgColor="white" p={5} minH="100vh">
          {/* <Center>
            <SectionHeading text="About Me" length={250}/>
          </Center> */}


          {/* Projects */}
          <SectionHeading text="Projects" length={250}/>

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
              imgs={["imgs/triviatree/platform.png", "imgs/triviatree/quiz.png", "imgs/triviatree/search.png", "imgs/triviatree/shop.png"]}
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
              imgs={["imgs/artdiscover/artists.png", "imgs/artdiscover/resources.png", "imgs/artdiscover/artist.png"]}
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
              imgs={["imgs/wavelength/game.png", "imgs/wavelength/game2.png", "imgs/wavelength/home.png"]}
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
