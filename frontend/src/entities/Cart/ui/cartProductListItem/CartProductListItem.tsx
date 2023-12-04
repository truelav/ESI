import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

import {
    ProductView,
    Product,
} from "../../../../entities/Product/model/types/product";

import CardComponent, {
    CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

import fallback_image from "/fallback_image.jpeg";

interface ProductListItem {
    className?: string;
    product: Product;
    view?: ProductView;
}

interface CartProductProps {
    product: ProductListItem;
    cartQuantity: number;
}

export const CartListItem = (props: CartProductProps) => {
    const { product } = props.product;
    const { cartQuantity } = props.product
    console.log(props)
    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={3}>
                    <Image
                        src={product?.images}
                        fallbackSrc={fallback_image}
                        alt={product?.brand}
                        boxSize="100px"
                        objectFit="contain"
                    />
                </GridItem>

                <GridItem colSpan={3}>
                    <CardTextComponent>{product?.brand} : {product?.model}</CardTextComponent>
                </GridItem>

                {/* <GridItem colSpan={2}>
                    <CardTextComponent>{product?.model}</CardTextComponent>
                </GridItem> */}

                <GridItem colSpan={2}>
                    <CardTextComponent>
                        {product.price}
                    </CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>{ cartQuantity }</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <Button onClick={() => console.log(product._id)}>
                        <FaTrash />
                    </Button>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
