import { Grid, GridItem, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import { clearCart } from "../../../Profile/model/profileSlice";

export const CartListHeader = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={2}></GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>Brand</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent> Model </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}></GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent> Price </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent> Product UPC </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <Button
                        variant="solid"
                        colorScheme="red"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </Button>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
