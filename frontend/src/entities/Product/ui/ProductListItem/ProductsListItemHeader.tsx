import { Grid, GridItem } from "@chakra-ui/react";

import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

export const ProductListItemHeader = () => {
    const product = {
        _id: "00000000",
        description: "description",
        images: "image",
        brand: "brand",
        model: "model",
        price: "price",
        quantity: "",
        upc: "upc",
    };
    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={3}>
                    <CardTextComponent>{product?.images}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{product?.brand}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{product?.model}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent>{product?.price}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{product?.upc}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{""}</CardTextComponent>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
