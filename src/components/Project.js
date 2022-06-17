import { Avatar, Box, Heading, Icon, Text, VStack, HStack, Image, Center, Stack, Button } from "@chakra-ui/react";
import '../styles.css'
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";

function Project(props) {
    const imageUrls = props.imgs;
    const [showInfo, setShowInfo] = useState(false);
    const [currentImg, setCurrentImg] = useState(imageUrls[0]);
    const [animationPlayed, setAnimationPlayed] = useState([]);

    const BoxMo = motion(Box);
    const HStackMo = motion(HStack);
    
    return (
        <Box>
            {/* MAIN PROJECT */}
            <HStackMo spacing="200px" mt="20px" /*initial={{ opacity:0, x:-50 }}*/ whileInView={{ opacity: 1, x: 0}} viewport={{ once:true }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40
            }} 
            >
                <Box w="400px"> 
                <Stack spacing="10px">
                    <Image src={props.logo} h="120px" w="120px" borderRadius="md" />
                    <Heading size="2xl" color={props.titleColor}> {props.name} </Heading>
                    <Text fontSize={25} color={props.tagColor}>
                        {props.tag}
                    </Text>
                </Stack>

                <Text fontSize={18} mt="30px">
                    {props.description}
                </Text>

                <Stack>
                    <a href={props.url}>
                        <Button size="lg" colorScheme="blue" mt="30px" variant="outline">  
                            Visit Site
                        </Button>
                    </a>

                    <Button colorScheme={ !showInfo ? "yellow" : "gray" } onClick={() => setShowInfo(!showInfo)}> { !showInfo ? "More" : "Less" } Details </Button>
                </Stack>
                </Box>

                <Image w="700px" src={props.img} borderRadius={8} boxShadow='xl' />
            </HStackMo>

            {/* ADDITIONAL INFO */}
            {
                showInfo ? 
                <AnimatePresence>
                    <BoxMo w="100%" mt="150px" /*initial={{ opacity:0, y:-200 }}*/ animate={{ opacity:1, y:0 }} exit={{ opacity: 0, y:-200 }} transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 40
                    }} >
                        <Center>
                            <VStack spacing="40px">
                                <Image src={currentImg} w="800px" h="450px" objectFit="cover" borderRadius="sm" boxShadow="lg" borderRadius="10px"/>
                                <HStack> 
                                    {
                                        imageUrls.map((url, key) => {
                                            return(
                                                <Box w="8px" h="8px" borderRadius={50} 
                                                    bgColor={ currentImg === imageUrls[key] ? "blue.400" : "gray.300" }/>
                                            )
                                        })
                                    }
                                </HStack>
                                <HStack spacing="15px" padding="5px">
                                    {
                                        imageUrls.map((url, key) => {
                                            return(
                                                <Image key={key} src={url} w="200px" h="120px" objectFit="cover" borderRadius="sm" transition=".1s linear" 
                                                    border="2px solid"
                                                    borderColor={ url === currentImg ? "blue.400" : "gray.300"}
                                                    _hover={{ cursor:"pointer", opacity: 0.6 }}
                                                    onClick={() => setCurrentImg(url)} />
                                            )
                                        })
                                    }
                                </HStack>
                            </VStack>
                        </Center>
                    </BoxMo>
                </AnimatePresence> : ''
            }
        </Box>
    )
}

export default Project;