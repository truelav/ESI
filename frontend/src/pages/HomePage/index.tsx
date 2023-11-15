import { Link } from "react-router-dom";
import { Button, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
      <Grid templateColumns='repeat(12, 1fr)' gap={6}>
        <GridItem colSpan={2}></GridItem>
        <GridItem colSpan={4}>
          <Heading as='h1' size='4xl' noOfLines={4}>
            <span color="blue">Unlock</span> Your Exclusive Catalog with a Single Account
          </Heading>
        </GridItem>
        <GridItem colSpan={4}>
          <Text my={6}>
            Welcome to our innovative B2B platform designed to streamline your business procurement process. Getting started is as easy as creating an account, granting you immediate access to a world of exclusive benefits. Once registered, you'll unlock a personalized catalog tailored to your specific business needs. Navigate through a comprehensive range of products and services, each curated to meet the demands of your industry. 
          </Text>
          <Text my={6}>
            Our user-friendly interface ensures a seamless experience as you explore the catalog, offering detailed information, specifications, and pricing. The account-based access not only provides you with a convenient way to manage your purchases but also opens doors to exclusive deals and tailored solutions. Simplify your B2B transactions, enhance your sourcing strategy, and elevate your business to new heights with our intuitive platform and personalized catalog.
          </Text>
        </GridItem>
        <GridItem colSpan={2}></GridItem>
        <GridItem colSpan={3}></GridItem>
        <GridItem colSpan={6}>
          <div className="home-container" >
            <Heading >
              Please 
              <Button                   
                  color={"white"}
                  bg={"blue.500"}>
                Log In
              </Button>
               using provided credentials 
               or
               <br/>
               <Link to="contact">
              <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.500"}
                  _hover={{
                  bg: "blue.700",
                  }}
              >
                  Contact Us
              </Button>
            </Link> 
              in order to sign up for an
              account

            </Heading>

            <Link to="products">Find your products</Link>
          </div>
        </GridItem>
        <GridItem colSpan={3}></GridItem>
      </Grid>
    </Container>
  );
}
