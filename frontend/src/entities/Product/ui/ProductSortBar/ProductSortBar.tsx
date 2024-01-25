import { useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProductSortItem } from "../ProductSortItem/ProductSortItem";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";

export const ProductSortBar = () => {

    const selectedSort = useSelector(state => state.sort.selectedSort)
    const sortList = useSelector(state => state.sort.sortList)

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(14, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                    <CardTextComponent>Sort By: </CardTextComponent>
                </GridItem>

                {sortList.map((sortItem: string) => (
                    <ProductSortItem sortItem={sortItem} selectedSort={selectedSort} key={sortItem} />
                ))}

                <GridItem colSpan={2}>
                    <CardTextComponent>{""}</CardTextComponent>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
