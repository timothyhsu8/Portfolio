import { Avatar, Box, Heading, Icon, Text, VStack, HStack, Image, Center, Stack, Button } from "@chakra-ui/react";
import '../styles.css'

function Project(props) {
    return (
        <HStack spacing="200px" mt="20px">
            <Box w="400px">
            <Stack spacing="10px">
                <Avatar src={props.logo} size="2xl" borderRadius={8} />
                <Heading size="2xl" color={props.titleColor}> {props.name} </Heading>
                <Text fontSize={25} color={props.tagColor}>
                    {props.tag}
                </Text>
            </Stack>

            <Text fontSize={18} mt="30px">
                {props.description}
            </Text>

            <a href={props.url}>
                <Button size="lg" colorScheme="blue" mt="30px" variant="outline">  
                Visit Site
                </Button>
            </a>
            </Box>

            <Image w="700px" src={props.img} borderRadius={8} boxShadow='xl' />
        </HStack>
    )
}

export default Project;