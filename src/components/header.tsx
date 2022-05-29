import React from "react";
import {
    HStack,
    Heading,
    Text,
    Button,
    ButtonGroup,
    useBreakpointValue
} from "@chakra-ui/react";

interface headerProps {}

export const Header: React.FC<headerProps> = ({}) => {

    const groupButtonHidden = useBreakpointValue({base: true, md: false})
    
    return (
        <HStack
            height={75}
            width="full"
            justifyContent="space-between"
            bgColor="blackAlpha.600"
            px={8}
        >
            <Heading size="lg" color="white">
                Landing Page
            </Heading>
            <HStack h="full" hidden={groupButtonHidden}>
                <ButtonGroup colorScheme="ghost">
                    <Button>Skills</Button>
                    <Button>Works</Button>
                    <Button>Social</Button>
                    <Button>Contacts</Button>
                </ButtonGroup>
            </HStack>
            <Button colorScheme="ghost" hidden={!groupButtonHidden}>Menu</Button>
        </HStack>
    );
};

export default Header;
