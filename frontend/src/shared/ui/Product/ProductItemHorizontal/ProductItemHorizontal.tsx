import { memo } from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import fallback_image from "/fallback_image.jpeg"
import { ProductView, Product } from "../../../../entities/Product/model/types/product";
import CardComponent, { CardVariants } from "../Card/CardComponent";
import { CardTextComponent } from "../Card/CardText";

interface ProductListPropsItem {
  className?: string;
  product: Product;
  view?: ProductView;
  handleToggleSelectProducts: (arg: string) => void;
}

export const ProductItemHorizontal = memo((props: ProductListPropsItem) => { 
    const { product, handleToggleSelectProducts } = props;
    return ( 
        <CardComponent cardVariant={CardVariants.outline} additionalClassNames="Dash_ProductListItem">
            <Grid templateColumns='repeat(7, 1fr)' gap={4}>
                <GridItem colSpan={1}>
                    <div>
                        <input
                            type="checkbox"
                            className="input_checkbox"
                            onChange={() => handleToggleSelectProducts(product?._id)}
                        />
                    </div>
                </GridItem>
                <GridItem colSpan={6}>
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
                                    {product?.category}
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
            </Grid>
        </CardComponent>
    )
})
