import { Button, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CartProductList } from "../../entities/Cart/ui/cartProductList/CartProductList";

const CartPage = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const products = useSelector((state) => state.cart.products);
    return (
        <>
            <Container>
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={12}>
                        <Heading>My Cart</Heading>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <CartProductList products={products} />
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
