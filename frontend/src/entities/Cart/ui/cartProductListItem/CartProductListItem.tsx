import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeProductFromCart } from "../../model/slice/cartSlice";
import { ProductView, Product } from "../../../../entities/Product/model/types/product";

import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

import fallback_image from "/fallback_image.jpeg";

interface ProductListItem {
    className?: string;
    product: Product;
    view?: ProductView;
    cartQuantity?: number;
}

interface CartProductProps {
    product: ProductListItem;
    cartQuantity: number;
}

export const CartListItem = (props: CartProductProps) => {
    const dispatch = useDispatch()
    const { product } = props.product;
    const { cartQuantity } = props.product
    const { price } = product

    const subTotal = price * cartQuantity

    const handleRemoveProductFromCart = () => {
        dispatch(removeProductFromCart(product._id))
    }

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
                        boxSize="100px"
                        objectFit="contain"
                    />
                </GridItem>

                <GridItem colSpan={3}>
                    <CardTextComponent>{product?.brand} : {product?.model}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>
                        ${product.price}.00
                    </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent>X{ cartQuantity }</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent>${ subTotal }</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <Button onClick={handleRemoveProductFromCart}>
                        <FaTrash />
                    </Button>
                </GridItem>
            </Grid>
        </CardComponent>
    );
};
