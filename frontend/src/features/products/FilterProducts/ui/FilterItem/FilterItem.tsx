import { Box } from "@chakra-ui/react";
import { filterCategory } from "../../../../../entities/Product/model/types/product";

import { SubcategoryAccordion } from "../SubcategoryAccordion/SubcategoryAccordion";

interface FilterItemProps {
    filterItem: filterCategory
    selectedFilters: string[]
}

const FilterItem = (props: FilterItemProps) => {
    const { filterItem, selectedFilters } = props

    return (
        <Box margin={2}>
            <SubcategoryAccordion 
                category={filterItem.name} 
                subcategories={filterItem.subcategories} 
                selectedFilters={selectedFilters}
            />
        </Box>
    )
}

export default FilterItem