import { Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Text } from "@chakra-ui/react"


export const SubcategoryAccordion = (props) => {

    const {subcategories, category} = props
    console.log(subcategories)
    return (
        <Accordion>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        {category}
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {subcategories.map((subcat: string) => (
                        <Text key={subcat}>{subcat}</Text>
                    ))}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}