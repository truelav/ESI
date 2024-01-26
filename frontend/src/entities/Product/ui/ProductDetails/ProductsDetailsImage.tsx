import { Card } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../../../../shared/ui/Images/ImageSlider/ImageSlider";

interface ProductImageProps {
    images: string[] | []
}

export const ProductDetailsImage: React.FC<ProductImageProps> = ({ images }) => {

    return (
      <>
        <Card maxW='' variant="unstyled">
            <ImageSlider />
        </Card>
      </>
    );
  };
  