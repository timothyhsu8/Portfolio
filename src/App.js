import { Avatar, Box, Heading, Icon, Text, VStack, HStack, Image, Center, Stack, Button } from "@chakra-ui/react";
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
              <Heading size="2xl" fontWeight="bold"> 
                Projects
              </Heading>
              <Box w={250} h="2px" bgColor="gray.400" />
            </VStack>
          </Center>

          <Center>
            {/* Trivia Tree */}
            <HStack spacing="200px" mt="20px">
              <Box w="400px">
                <Stack spacing="8px">
                  <Avatar src="imgs/triviatree.png" size="2xl" borderRadius={8} />
                  <Heading size="2xl" color="red.700"> Trivia Tree </Heading>
                  <Text fontSize={25} color="yellow.800">
                    Community driven quizzing website
                  </Text>
                </Stack>

                <Text fontSize={18} mt="30px">
                  Take quizzes created by other community members or create your own and share them with the world
                </Text>

                <a href="https://triviatree.herokuapp.com/">
                  <Button size="lg" colorScheme="blue" mt="30px" variant="outline">  
                    Visit Site
                  </Button>
                </a>
              </Box>

              <Image w="700px" src="imgs/triviatreepage.png" borderRadius={8} boxShadow='xl' />
            </HStack>
          </Center>
        </Box>

        
      </Box>
    </Box>
  );
}

export default App;
