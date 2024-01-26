import { Card } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../../../../shared/ui/Images/ImageSlider/ImageSlider";

interface ProductImageProps {
    imageSource: string
}

export const ProductDetailsImage: React.FC<ProductImageProps> = ({ imageSource }) => {

    return (
      <>
        <Card maxW='' variant="unstyled">
            {/* <Image
                src={imageSource}
                alt={imageSource}
                borderRadius='lg'
            /> */}
            <ImageSlider />
        </Card>
      </>
    );
  };
  