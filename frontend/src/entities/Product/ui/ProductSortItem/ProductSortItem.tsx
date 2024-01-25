
import { useDispatch } from "react-redux"
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { Button, GridItem, Text } from "@chakra-ui/react"

import {setSort} from "../../../../features/products/SortProducts/model/slice/sortSlice"

interface SelectedSort {
    name: string
    ascending: boolean
    descending: boolean
}

interface ProductSortItemProps {
    sortItem: string
    selectedSort: SelectedSort
    fontSize?: string
    color?: string
}

export const ProductSortItem = (props: ProductSortItemProps) => {
    const dispatch = useDispatch()
    const { sortItem, selectedSort } = props
    const isSelected = selectedSort.name == sortItem

    const handleSelectSort = () => {
        dispatch(setSort(sortItem))
    }

    let icon = <></>
    if(isSelected && selectedSort.ascending){
        icon = <GoArrowUp />
    } else {
        icon = <GoArrowDown />
    }

    return (
        <GridItem colSpan={2} >
            <Button 
                px={8}
                isActive={isSelected}
                color={isSelected? "blue" : "gray"}
                onClick={handleSelectSort}
                // variant={isSelected ? "solid" : "ghost"}
            >
                <Text
                    fontSize={18}
                    textTransform="capitalize"
                >
                    {sortItem}
                </Text>
                {icon}
            </Button>
        </GridItem>
    )
}