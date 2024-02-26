
import { useSelector } from "react-redux"
import FilterItem from "../FilterItem/FilterItem"

const FilterList = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filterList = useSelector((state) => state.filter.filters)            

    return (
        <>
            {filterList.map((filterItem) => (
                <FilterItem  
                    filterItem={filterItem} 
                    key={filterItem.name}
                />
            ))}
        </>
    )
}

export default FilterList