import { memo } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Image, Box, Flex } from "@chakra-ui/react";

import {
    ProductView,
    Product,
} from "../../../../entities/Product/model/types/product";
import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

import fallback_image from "/fallback_image.jpeg";
import AddToCart from "../../../../features/cart/addToCart/AddToCartFeature";

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
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                    <Image
                        src={product?.images}
                        fallbackSrc={fallback_image}
                        alt={product?.brand}
                        boxSize="125px"
                        objectFit="contain"
                    />
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent fontSize="xl">{product?.brand}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{product?.model}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent fontSize="xl">{product?.quantity}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent>
                        ${product.price}.00
                    </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{product?.upc}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <Flex 
                        direction="column"
                        align="center"
                        justify="space-evenly"
                    >
                        <Box p={2}>
                            <Link to={`/products/${product?._id}`}>
                                <Button>Learn More</Button>
                            </Link>
                        </Box>
                        <Box p={2}>
                            <AddToCart product={product}/>
                        </Box>
                    </Flex>
                </GridItem>

            </Grid>
        </CardComponent>
    );
});
