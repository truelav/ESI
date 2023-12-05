import { Grid, GridItem, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import { clearCart } from "../../model/slice/cartSlice";

export const CartListHeader = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    console.log(cart)
    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                </GridItem>

                <GridItem colSpan={3}>
                    <CardTextComponent>Brand Model</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent> Price </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent> Quantity </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    {/* <CardTextComponent> Remove </CardTextComponent> */}
                    <Button variant='solid' colorScheme='red' onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
