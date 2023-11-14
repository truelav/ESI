import { Button, Text, Heading, Box } from "@chakra-ui/react";

export const ProductFilterBar = () => {
    return (
        <>
            <Heading>Filter By:</Heading>
            <Box margin={2}>
                <Button color="blue">
                    <Text>Toys</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button color="blue">
                    <Text>Appliance</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button color="blue">
                    <Text>Computers</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button color="blue">
                    <Text>Philips</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button color="blue">
                    <Text>Kawasaki</Text>
                </Button>
            </Box>
        </>
    );
};
