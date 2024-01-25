import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import { ProductSortItem } from "../ProductSortItem/ProductSortItem";

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
