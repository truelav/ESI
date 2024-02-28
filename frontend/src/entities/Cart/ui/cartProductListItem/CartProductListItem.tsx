import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { Product } from "../../../../entities/Product/model/types/product";
import { deleteFromCart } from "../../../Profile/model/profileSlice";

import CardComponent, { CardVariants } from "../../../../shared/ui/Product/Card/CardComponent";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";

import fallback_image from "/fallback_image.jpeg";

interface CartProductProps {
    product: Product;
}

export const CartListItem = (props: CartProductProps) => {
    const dispatch = useDispatch();
    const { product } = props

    const handleRemoveProductFromCart = () => {
        dispatch(deleteFromCart(product._id));
    };

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                    <Image
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        src={product?.images}
                        fallbackSrc={fallback_image}
                        alt={product?.brand}
                        boxSize="100px"
                        objectFit="contain"
                    />
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>
                        {product?.brand}
                    </CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}>
                    <CardTextComponent>{product?.model}</CardTextComponent>
                </GridItem>

                <GridItem colSpan={1}></GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>${product.price}.00</CardTextComponent>
                </GridItem>

                <GridItem colSpan={2}>
                    <CardTextComponent>${product.upc}</CardTextComponent>
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
