import { Card } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../../../../shared/ui/Images/ImageSlider/ImageSlider";

interface ProductImagesProps {
    images: string[] | []
}

export const ProductDetailsImage: React.FC<ProductImagesProps> = (props : ProductImagesProps) => {

    const { images } = props

    return (
      <>
        <Card maxW='' variant="unstyled">
            <ImageSlider images={images} />
        </Card>
      </>
    );
  };
  