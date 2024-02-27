import { Button, Text } from "@chakra-ui/react"

export const FilterSubcategoriesList = (props) => {
    const { category, subcategories, selectedSubCategories, handleToggleSubcategory  } = props

    return (
        <>
            {subcategories.map((subcategory: string) => (
                <Button 
                    key={subcategory}
                    isActive={selectedSubCategories.includes(subcategory)}
                    color={selectedSubCategories.includes(subcategory)? "blue": "black"}
                    onClick={() => handleToggleSubcategory({category, subcategory})}
                >
                    <Text >{subcategory}</Text>
                </Button>
            ))}
        </>
    )
}