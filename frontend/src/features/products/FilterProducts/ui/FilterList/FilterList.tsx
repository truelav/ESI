
import { useSelector } from "react-redux"
import FilterItem from "../FilterItem/FilterItem"

const FilterList = () => {

    const filterList = useSelector((state) => state.filter.filters)
    const selectedFilters = useSelector((state) => state.filter.selectedFilters)

    return (
        <>
            {filterList.map((filterItem: string) => (
                <FilterItem  filterItem={filterItem} selectedFilters={selectedFilters} key={filterItem}/>
            ))}
        </>
    )
}

export default FilterList