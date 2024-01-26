import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter } from "@chakra-ui/react";
import React from "react";
import AddToCart from "../../../../features/cart/addToCart/AddToCartFeature";
import { ProductBulletList } from "../../../../shared/ui/Product/ProductBulletList/ProductBulletList";
import { Product } from "../../model/types/product";

interface ProductProps {
    product: Product
}


export const ProductDetailsInfo: React.FC<ProductProps> = ({ product } ) => {
    const {price, description, brand, model, upc, subcategory} = product

  return (
    <>
        <Card maxW='lg'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                <Heading size='lg'>{brand} {model}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                    {subcategory}
                </Text>
                <Text>
                    {description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${price}.00
                </Text>
                <Text>
                    UPC: {upc}
                </Text>
                </Stack>
                <ProductBulletList />
            </CardBody>
            <Divider />
            <CardFooter>
                {/* 
                eslint-disable-next-line @typescript-eslint/ban-ts-comment */} 
                {/* 
                // @ts-ignore */}
                <AddToCart product={product}/>
            </CardFooter>
        </Card>
    </>
  );
};
