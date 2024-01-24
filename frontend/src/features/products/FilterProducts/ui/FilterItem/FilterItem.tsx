import { Button, Text, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { addSelectedFilter, removeSelectedFilter } from "../../model/slice/filterSlice"

interface FilterItemProps {
    filterItem: string
    selectedFilters: string[]
}

const FilterItem = (props: FilterItemProps) => {
    const dispatch = useDispatch()
    const { filterItem, selectedFilters } = props
    const isSelected = selectedFilters.includes(filterItem)

    const handleFilterChange = (filterItem: string, isSelected: boolean) => {
        if(isSelected){
            dispatch(removeSelectedFilter(filterItem))
        } else {
            dispatch(addSelectedFilter(filterItem))
        }
    }

    return (
        <Box margin={2}>
            <Button
                color={isSelected? "blue" : "gray"}
                isActive={isSelected}
                // variant={isSelected ? "solid" : "ghost"}
                onClick={() => handleFilterChange(filterItem, isSelected)}
            >
                <Text>
                    {filterItem}
                </Text>
            </Button>
        </Box>
    )
}

export default FilterItem