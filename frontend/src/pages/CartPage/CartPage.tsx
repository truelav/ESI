import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CartProductList } from "../../entities/Cart/ui/cartProductList/CartProductList";
import { CartOrderSummary } from "../../entities/Cart/ui/cartSummary/CartSummary";

const CartPage = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const products = useSelector((state) => state.cart.products);
    let cartContent = <></>

    if(products.length === 0){
        cartContent = (
            <>
                <Heading>
                    The Cart is Empty
                    Please Add some products to it
                </Heading>
            </>
        )
    } else {
        cartContent = (
            <>
                <CartProductList products={products} />
                <CartOrderSummary />
            </>
        )
    }

    return (
        <>
            <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={12}>
                        <Heading>My Cart</Heading>
                    </GridItem>
                    <GridItem colSpan={12}>
                        {cartContent}
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default CartPage;
