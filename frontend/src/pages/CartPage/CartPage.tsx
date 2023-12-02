import { Button, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function CartPage() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch()

    console.log(products)

    return (
        <>
            <Container>
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={12}>
                        <Heading>My Cart</Heading>
                    </GridItem>
                    <GridItem colSpan={12}>

                    </GridItem>
                    <GridItem colSpan={12}>
                        <Button colorScheme="blue">Send Order</Button>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default CartPage;
