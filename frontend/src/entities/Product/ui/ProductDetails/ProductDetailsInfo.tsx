import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../model/types/product";

interface ProductProps {
    product: Product
}


export const ProductDetailsInfo: React.FC<ProductProps> = ({ product } ) => {
    const {price, description, brand, model, upc, subcategory} = product
    console.log(product)
    
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
                    $ {price}
                </Text>
                <Text>
                    UPC: {upc}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </>
  );
};
