import { Button, Text, Box } from "@chakra-ui/react";

interface ProductFilterItemProps {
    filterItem: string
    filterBy: string
    setFilterBy: (arg0: string) => void;
}

const ProductFilterItem = (props: ProductFilterItemProps) => {

    const { filterItem, filterBy, setFilterBy } = props
    const isSelected = filterBy === filterItem
    
    return (
        <Box margin={2}>
            <Button
                color={isSelected? "green": "blue"}
                onClick={() => setFilterBy(filterItem)}
            >
                <Text>
                    {filterItem}
                </Text>
            </Button>
        </Box>
    )
}

export default ProductFilterItem