import React from "react";
import { Card, CardBody, Stack, Divider, CardFooter } from "@chakra-ui/react";
import AddToCart from "../../../../features/cart/addToCart/AddToCartFeature";
import { ProductBulletList } from "../../../../shared/ui/Product/ProductBulletList/ProductBulletList";
import { Product } from "../../model/types/product";
import { ProductDetailsInfoItem } from "./ProductDetailsInfoItem";

interface ProductProps {
    product: Product
}

export const ProductDetailsInfo: React.FC<ProductProps> = ({ product } ) => {

    const {price, description, brand, model, upc, category, quantity} = product

    return (
        <>
            <Card maxW='lg'>
                <CardBody>
                    <Stack mt='6' spacing='3'>

                        <ProductDetailsInfoItem productInfo={brand} element="HEADING" size="lg" />
                        <ProductDetailsInfoItem productInfo={model} element="HEADING" size="lg" info="Model: " />

                        <ProductDetailsInfoItem productInfo={description} element="TEXT" size="lg" />
                        <ProductDetailsInfoItem productInfo={category} element="TEXT" size="lg" info="Category: "/>
                        <ProductDetailsInfoItem productInfo={price} element="TEXT" size="lg" info="Price: $"/>
                        <ProductDetailsInfoItem productInfo={quantity} element="TEXT" size="lg" info="Quantity: "/>
                        <ProductDetailsInfoItem productInfo={upc} element="TEXT" size="lg" info="UPC: "/>

                    </Stack>
                    <ProductBulletList />
                </CardBody>
                <Divider />
                <CardFooter>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */} 
                    {/*   @ts-ignore */}
                    <AddToCart product={product}/>
                </CardFooter>
            </Card>
        </>
    );
};
