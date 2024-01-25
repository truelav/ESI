import { Input, Button, Text, Grid, GridItem } from "@chakra-ui/react";

interface ProductSearchBarProps {
    searchTerm: string
    setSearchTerm: (arg0: string) => void;
}

export const ProductSearchBar = (props: ProductSearchBarProps) => {

    const { searchTerm, setSearchTerm } = props;

    return (
        <>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={10}>
                    <Input
                        type="text"
                        name="brand"
                        placeholder="Search for product..."
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
