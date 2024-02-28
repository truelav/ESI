import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CartProductList } from "../../entities/Cart/ui/cartProductList/CartProductList";
import { CartOrderSummary } from "../../entities/Cart/ui/cartSummary/CartSummary";

const CartPage = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const profile = useSelector((state) => state.profile);
    const {cart, user} = profile
    console.log(cart, user)
    
    let cartContent = <></>
    if(cart.length === 0){
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
                {/* <CartProductList />
                <CartOrderSummary /> */}
            </>
        )
    }

    return (
        <>
            <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={12}>
                        <Heading>My Cart</Heading>
                        {/* <Text>{user.username}</Text> */}
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
