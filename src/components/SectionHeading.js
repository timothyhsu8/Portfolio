import { Box, Heading, VStack } from "@chakra-ui/react";

function SectionHeading(props) {
    return (
        <VStack w="100%" spacing={5} mt="30px" mb="60px">
            <Heading size="2xl" fontWeight="bold" color="gray.700"> 
                {props.text}
            </Heading>
            <Box w={props.length} h="2px" bgColor="gray.300" />
        </VStack>
    )
}

export default SectionHeading;