import { Grid, GridItem } from "@chakra-ui/react";

import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";


export const CartListHeader = () => {

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={3}>

                </GridItem>

                <GridItem colSpan={3}>
                    <CardTextComponent>Brand Model</CardTextComponent>
                </GridItem>

                {/* <GridItem colSpan={2}>
                    <CardTextComponent>{product?.model}</CardTextComponent>
                </GridItem> */}

                <GridItem colSpan={2}>
                    <CardTextComponent> Price </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent> Quantity </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent> Remove </CardTextComponent>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
