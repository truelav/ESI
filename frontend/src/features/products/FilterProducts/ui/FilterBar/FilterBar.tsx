import { Heading} from "@chakra-ui/react";
import FilterList from "../FilterList/FilterList";

const FilterBar = () => {
    return (
        <>
            <Heading>Select Filter By:</Heading>
            <FilterList />
        </>
    );
};

export default FilterBar
