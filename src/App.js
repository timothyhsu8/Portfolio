import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import './styles.css'

function App() {
  return (
    <Box>
      <Box className="wrapper">
        <header>
          <img src="imgs/mountains.jpg" className="background"></img>
          {/* <img src="imgs/catra.webp" className="foreground"></img> */}
          <VStack spacing={4}>
            <Heading size='3xl' color="white"> Timothy Hsu </Heading>
            <Heading size="xl" color="white" fontWeight="thin"> Web Developer </Heading>
          </VStack>
        </header>
        <Box p={3} bgColor="white" height='100vh'>
          <Text>
            
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
