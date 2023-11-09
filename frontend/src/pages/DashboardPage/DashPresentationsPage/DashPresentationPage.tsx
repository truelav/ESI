import { Container, Text,   Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  Box
} from "@chakra-ui/react";

function DashPresentationPage() {

  return (
    <>

        <Container>
            <Text>Welcome to Presentation Page</Text>
        </Container>

        <div>
          <Box>
            <br/>
            <ul>
              <li>
                I need to make  the list of AccordionItems for each category, <br/>
              </li>
              <li>
                The Accordion Item will hold each product for that category <br/>
              </li>
              <li>
                Select All Button, that will select all products <br/>
              </li>
              <li>
                Select All Category Item <br/>
              </li>
              <li>
                Select Each Individual Item <br/>
              </li>
            </ul>
            <br/>
          </Box>
        </div>

        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
  );
}

export default DashPresentationPage;
