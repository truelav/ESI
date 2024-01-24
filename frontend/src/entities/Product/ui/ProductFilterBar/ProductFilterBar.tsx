import { Heading} from "@chakra-ui/react";
import ProductFilterItem from "../ProductFilterItem/ProductFilterItem";

export const ProductFilterBar = (props: {
    filterBy: string;
    filterItems: string[];
    setFilterBy: (arg0: string) => void;
}) => {

    const { filterBy, filterItems, setFilterBy } = props;
    console.log(filterItems)

    return (
        <>
            <Heading>Filter By:</Heading>
            {filterItems.map((filterItem: string) => (
                <ProductFilterItem  filterItem={filterItem} filterBy={filterBy} setFilterBy={setFilterBy} key={filterItem}/>
            ))}
        </>
    );
};
