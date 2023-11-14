import { Input, Button, Text, Grid, GridItem } from "@chakra-ui/react";

export const ProductSearchBar = (props: {
    searchTerm: string;
    setSearchTerm: (arg0: string) => void;
}) => {
    const { searchTerm, setSearchTerm } = props;

    return (
        <>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={10}>
                    <Input
                        type="text"
                        name="brand"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <Button color="blue">
                        <Text>Search Products</Text>
                    </Button>
                </GridItem>
            </Grid>
        </>
    );
};
