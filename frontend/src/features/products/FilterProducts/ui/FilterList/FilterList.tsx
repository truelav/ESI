
import { useSelector } from "react-redux"
import FilterItem from "../FilterItem/FilterItem"

const FilterList = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filterList = useSelector((state) => state.filter.filters)            
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
    //@ts-ignore
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