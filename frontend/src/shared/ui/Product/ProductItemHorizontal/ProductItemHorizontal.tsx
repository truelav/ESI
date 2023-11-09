import { memo } from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Image, Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

import { useDeleteSingleProductMutation } from "../../../../app/api/apiSlice";

import { ProductView, Product } from "../../../../entities/Product/model/types/product";
import CardComponent, { CardVariants } from "../Card/CardComponent";
import { CardTextComponent } from "../Card/CardText";

import fallback_image from "/fallback_image.jpeg"

interface ProductListPropsItem {
  className?: string;
  product: Product;
  view?: ProductView;
  handleToggleSelectProducts: (arg: string) => void;
}

export const ProductItemHorizontal = memo((props: ProductListPropsItem) => { 
    const { product, handleToggleSelectProducts } = props;
    const [deleteSingleProduct, {isLoading, isError, isSuccess}] = useDeleteSingleProductMutation()

    if(isError){
        return (<div>...Some Error Has Occured with this Product</div>)
    }

    if(isLoading){
        return (<div>...Loading</div>)
    }

    if(isSuccess){
        return (<div>Deleted</div>)
    }


    return ( 
        <CardComponent cardVariant={CardVariants.outline} additionalClassNames="Dash_ProductListItem">
            <Grid templateColumns='repeat(12, 1fr)' gap={4}>
                <GridItem colSpan={1}>
                    <div>
                        <input
                            type="checkbox"
                            className="input_checkbox"
                            onChange={() => handleToggleSelectProducts(product?._id)}
                        />
                    </div>
                </GridItem>

                <GridItem colSpan={10}>
                    <Link to={`/dashboard/products/${product?._id}`}>
                        <Grid templateColumns='repeat(6, 1fr)' gap={4}>
                                <GridItem colSpan={1}>
                                    <Image 
                                        src={product?.images}
                                        fallbackSrc={fallback_image}
                                        alt={product?.brand}
                                        boxSize='100px'
                                        objectFit='contain'
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
                                    <CardTextComponent>
                                        Active
                                    </CardTextComponent>
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
    )
})
