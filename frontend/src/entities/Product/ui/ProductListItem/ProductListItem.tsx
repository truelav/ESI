import { memo } from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Image } from "@chakra-ui/react";

import {
    ProductView,
    Product,
} from "../../../../entities/Product/model/types/product";
import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

import fallback_image from "/fallback_image.jpeg";

interface ProductListPropsItem {
    className?: string;
    product: Product;
    view?: ProductView;
}

export const ProductListItem = memo((props: ProductListPropsItem) => {
    const { product } = props;

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Link to={`/dashboard/products/${product?._id}`}>
                <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                    <GridItem colSpan={1}>
                        <Image
                            src={product?.images}
                            fallbackSrc={fallback_image}
                            alt={product?.brand}
                            boxSize="100px"
                            objectFit="contain"
                        />
                    </GridItem>

                    <GridItem colSpan={1}>
                        <CardTextComponent>{product?.brand}</CardTextComponent>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <CardTextComponent>{product?.model}</CardTextComponent>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <CardTextComponent>Active</CardTextComponent>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <CardTextComponent>
                            {product?.quantity}
                        </CardTextComponent>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <CardTextComponent>
                            {product?.updatedAt}
                        </CardTextComponent>
                    </GridItem>
                </Grid>
            </Link>
        </CardComponent>
    );
});
