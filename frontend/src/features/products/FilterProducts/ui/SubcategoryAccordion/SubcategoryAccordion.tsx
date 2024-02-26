import { Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Text, Button } from "@chakra-ui/react"


export const SubcategoryAccordion = (props) => {

    const {subcategories, category} = props
    console.log(subcategories)

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
                    <>
                        <Button>All {category}</Button>
                    </>
                    <>
                        {subcategories.map((subcat: string) => (
                            <Button key={subcat}><Text >{subcat}</Text></Button>
                        ))}
                    </>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}