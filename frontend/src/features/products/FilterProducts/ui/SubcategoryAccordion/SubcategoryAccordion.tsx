import { useDispatch, useSelector } from "react-redux"
import { Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Flex } from "@chakra-ui/react"
import { toggleCategory, toggleSubcategory } from "../../model/slice/filterSlice"
import { FilterSubcategoriesList } from "./FilterSubcategoriesList"
import { FilterCategoriesList } from "./FilterCategoryList"

export const SubcategoryAccordion = (props) => {
    const dispatch = useDispatch()
    const { category, subcategories } = props
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedCategories = useSelector(state => state.filter.categories)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedSubCategories = useSelector(state => state.filter.subcategories)

    const handleToggleCategory = (filterItem) => {
        dispatch(toggleCategory(filterItem))
    }

    const handleToggleSubcategory = (filterItem) => {
        dispatch(toggleSubcategory(filterItem))
    }

    return (
        <Accordion defaultIndex={[]} allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    {category}  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <FilterCategoriesList category={category} subcategories={subcategories} selectedCategories={selectedCategories} handleToggleCategory={handleToggleCategory} />
                    <FilterSubcategoriesList category={category} subcategories={subcategories} selectedSubCategories={selectedSubCategories} handleToggleSubcategory={handleToggleSubcategory} />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}