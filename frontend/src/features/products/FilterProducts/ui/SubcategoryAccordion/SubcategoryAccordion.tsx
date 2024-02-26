import { useDispatch } from "react-redux"
import { Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Text, Button, Box } from "@chakra-ui/react"


import { addSelectedFilter, removeSelectedFilter, toggleCategory, toggleSubcategory } from "../../model/slice/filterSlice"

export const SubcategoryAccordion = (props) => {
    const {category, subcategories, selectedFilters} = props
    const dispatch = useDispatch()

    const isSelected = selectedFilters.includes(category)

    const handleFilterChange = (category: string, isSelected: boolean) => {
        if(isSelected){
            dispatch(removeSelectedFilter(category))
        } else {
            dispatch(addSelectedFilter(category))
        }
    }

    // implement handleToggleCategory

    // implement handleToggleSubcategory

    return (
        <Accordion defaultIndex={[]} allowMultiple>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        {category}
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Box bg='' p={4}>
                        <Button
                            colorScheme={isSelected? "whatsapp" : "gray"}
                            color={isSelected? "white": "green"}
                            onClick={() => handleFilterChange(category, isSelected)}
                        >
                            All {category}
                        </Button>
                    </Box>
                    <>
                        {subcategories.map((subcat: string) => (
                            <Button 
                                key={subcat}
                                colorScheme={isSelected? "whatsapp" : "gray"}
                                color={isSelected? "white": "green"}
                                onClick={() => handleFilterChange(subcat)}
                            >
                                <Text >{subcat}</Text>
                            </Button>
                        ))}
                    </>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}