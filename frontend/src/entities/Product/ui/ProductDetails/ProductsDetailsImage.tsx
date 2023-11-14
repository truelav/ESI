import { Image, Card } from "@chakra-ui/react";
import React from "react";

interface ProductImageProps {
    imageSource: string
}

export const ProductDetailsImage: React.FC<ProductImageProps> = ({ imageSource }) => {

    return (
      <>
        <Card maxW='' variant="unstyled">
            <Image
                src={imageSource}
                alt={imageSource}
                borderRadius='lg'
            />
        </Card>
      </>
    );
  };
  