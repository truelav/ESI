import { Button, Box } from "@chakra-ui/react"

export const FilterCategoriesList = (props) => {
    const { category, subcategories, selectedCategories, handleToggleCategory  } = props
    const isCategorySelected = selectedCategories.includes(category)
    return (
        <Box bg='' p={4}>
            <Button
                colorScheme={isCategorySelected? "blue" : "gray"}
                color={isCategorySelected? "white": "black"}
                onClick={() => handleToggleCategory({category, subcategories})}
            >
                {isCategorySelected? "Deselect": "Select"} All {category}
            </Button>
        </Box>
    )
}