import { memo } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridItem, Image, Button, Checkbox, Box } from "@chakra-ui/react";

import { CardTextComponent } from "../Card/CardText";
import CardComponent, { CardVariants } from "../Card/CardComponent";
import { useDeleteSingleProductMutation } from "../../../../app/api/apiSlice";
import { Product } from "../../../../entities/Product/model/types/product";
import { addSelectedProduct, removeSelectedProduct } from "../../../../entities/Product/model/slice/productSlice";

import fallback_image from "/fallback_image.jpeg";

export interface ProductItemProps {
    className?: string;
    product: Product;
}

export const ProductItem = memo((props: ProductItemProps) => {
    const dispatch = useDispatch();
    const { product } = props;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedProductIds = useSelector((state) => state.product.selectedProductIds)
    const isSelected = selectedProductIds.filter((id: string) => id === product._id).length === 1

    const [deleteSingleProduct, { isLoading, isError, isSuccess }] = useDeleteSingleProductMutation();

    const handleToggleProduct = (id: string) => {
        if (isSelected){
            dispatch(removeSelectedProduct(id))
        } else {
            dispatch(addSelectedProduct(id))
        }
    }    

    if (isError) {
        return <div>...Some Error Has Occured with this Product</div>;
    }

    if (isLoading) {
        return <div>...Loading</div>;
    }

    if (isSuccess) {
        return <div>Deleted</div>;
    }

    return (
        <CardComponent
            cardVariant={CardVariants.outline}
            additionalClassNames="Dash_ProductListItem"
        >
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={1}>
                    <Box>
                        <Checkbox
                            size="lg"
                            isChecked={isSelected}
                            onChange={() =>
                                handleToggleProduct(product?._id)
                            }
                        >
                            Check
                        </Checkbox>
                    </Box>
                </GridItem>

                <GridItem colSpan={10}>
                    <Link to={`/dashboard/products/${product?._id}`}>
                        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                            <GridItem colSpan={1}>
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

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {product?.brand}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {product?.model}
                                </CardTextComponent>
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
                </GridItem>

                <GridItem colSpan={1}>
                    <Button onClick={() => deleteSingleProduct(product._id)}>
                        <FaTrash />
                    </Button>
                </GridItem>
            </Grid>
        </CardComponent>
    );
});
