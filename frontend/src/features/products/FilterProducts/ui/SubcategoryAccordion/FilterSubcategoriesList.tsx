import { Button, Text } from "@chakra-ui/react"

export const FilterSubcategoriesList = (props) => {
    const { category, subcategories, selectedSubCategories, handleToggleSubcategory  } = props

    return (
        <>
            {subcategories.map((subcategory: string) => (
                <Button 
                    key={subcategory}
                    colorScheme={selectedSubCategories.includes(subcategory)? "whatsapp" : "gray"}
                    color={selectedSubCategories.includes(subcategory)? "white": "green"}
                    onClick={() => handleToggleSubcategory({category, subcategory})}
                >
                    <Text >{subcategory}</Text>
                </Button>
            ))}
        </>
    )
}