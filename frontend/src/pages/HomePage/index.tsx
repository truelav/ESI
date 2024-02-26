import { Link } from "react-router-dom";
import { Container, Grid, GridItem, Heading, Highlight } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
      <Grid templateColumns='repeat(12, 1fr)' gap={6}>
        <GridItem colSpan={4} colStart={3}>
          <Heading as='h1' size='4xl'>
            <span color="blue">Welcome to ESIP</span>
          </Heading>
        </GridItem>

        <GridItem colSpan={6} colStart={3}>
          <Heading>
            <Link to="contact">
              <Highlight
                  query={['Contact Us']}
                  styles={{ px: '1', py: '1', rounded: 'full', bg: 'blue.100' }}
              >
                Contact Us
              </Highlight>
            </Link> 
              in order to sign up for an
              account
            </Heading>
        </GridItem>

        <GridItem colSpan={6} colStart={3}>
            <Heading >
              Please 
              <Link to="/login">
                <Highlight
                    query={['Log In']}
                    styles={{ px: '1', py: '1', rounded: 'full', bg: 'blue.100' }}
                >
                  Log In
                </Highlight>               
              </Link>

               using provided credentials or
               <br/>
            </Heading>   
        </GridItem>

        <Link to="products">Find your products</Link>

      </Grid>
    </Container>
  );
}
