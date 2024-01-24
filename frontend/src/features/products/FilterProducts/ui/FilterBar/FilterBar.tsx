import { Heading} from "@chakra-ui/react";
import FilterList from "../FilterList/FilterList";

const FilterBar = () => {
    return (
        <>
            <Heading>Filter By:</Heading>
            <FilterList />
        </>
    );
};

export default FilterBar
