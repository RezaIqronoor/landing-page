import React from "react";
import {
    ChakraProvider,
    Container,
    Box,
    Center,
    Heading,
    HStack,
    VStack,
    Button,
} from "@chakra-ui/react";
import Header from "./components/header";

import theme from "./theme";
import "./theme/styles.css";
import welcomePageBackground from "./resources/images/welcomePageBackground.jpg";

export const App: React.FC = (_) => {
    return (
        <ChakraProvider theme={theme}>
            <Container maxW="full" p={0}>
                <Center
                    h="100vh"
                    w="full"
                    backgroundImage={`url(${welcomePageBackground})`}
                    bgPos="center"
                    bgSize="cover"
                >
                    <VStack
                        h="full"
                        w="full"
                        backgroundColor="blackAlpha.600"
                        spacing={0}
                    >
                        <Header />
                        <Center
                            h="full"
                            w="full"
                            justifyContent="center"
                        >
                            <VStack>
                                <Heading
                                    size={{ base: "3xl", md: "4xl" }}
                                    color="white"
                                    zIndex="toast"
                                >
                                    Welcome to Landing Page
                                </Heading>
                                <Button colorScheme="whiteAlpha">Discover my Portofolios</Button>
                            </VStack>
                        </Center>
                    </VStack>
                </Center>
            </Container>
        </ChakraProvider>
    );
};
