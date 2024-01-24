import { Grid, GridItem } from "@chakra-ui/react";

import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

export const ProductSortBar = (props: {
    sortBy: string | number;
    setSortBy: (arg0: string | number) => void;
}) => {
    const { sortBy, setSortBy } = props;

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                    <CardTextComponent>Sort By: </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2} onClick={() => setSortBy("brand")}>
                    <CardTextComponent>Brand</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>Model</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent>Inventory</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent>Price</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>UPC</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{""}</CardTextComponent>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
