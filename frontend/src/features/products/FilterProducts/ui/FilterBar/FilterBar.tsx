import { Text } from "@chakra-ui/react";
import FilterList from "../FilterList/FilterList";

const FilterBar = () => {
    return (
        <>
            <Text>Select Filter By:</Text>
            <FilterList />
        </>
    );
};

export default FilterBar
