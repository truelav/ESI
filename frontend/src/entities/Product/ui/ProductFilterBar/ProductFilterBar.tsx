import { Button, Text, Heading, Box } from "@chakra-ui/react";

export const ProductFilterBar = (props: {
    filterBy: string;
    setFilterBy: (arg0: string) => void;
}) => {
    const { filterBy, setFilterBy } = props;
    return (
        <>
            <Heading>Filter By:</Heading>
            <Box margin={2}>
                <Button color="green" onClick={() => setFilterBy("")}>
                    <Text>Remove Filters</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button
                    color={filterBy === "toys" ? "red" : "blue"}
                    onClick={() => setFilterBy("toys")}
                >
                    <Text>Toys</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button
                    color={filterBy === "appliance" ? "red" : "blue"}
                    onClick={() => setFilterBy("appliance")}
                >
                    <Text>Appliance</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button
                    color={filterBy === "computers" ? "red" : "blue"}
                    onClick={() => setFilterBy("computers")}
                >
                    <Text>Computers</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button
                    color={filterBy === "philips" ? "red" : "blue"}
                    onClick={() => setFilterBy("philips")}
                >
                    <Text>Philips</Text>
                </Button>
            </Box>
            <Box margin={2}>
                <Button
                    color={filterBy === "kawasaki" ? "red" : "blue"}
                    onClick={() => setFilterBy("kawasaki")}
                >
                    <Text>Kawasaki</Text>
                </Button>
            </Box>
        </>
    );
};
