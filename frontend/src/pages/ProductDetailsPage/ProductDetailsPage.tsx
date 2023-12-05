// Product Item Page

import { Container } from "@chakra-ui/react";
import { ProductDetails } from "../../entities/Product/ui/ProductDetails/ProductDetails";

function ProductDetailsPage() {
  return (
    <>
      <Container maxW="full"  minH="700px" mt="100px" centerContent overflow="hidden">
        <ProductDetails />
      </Container>
    </>
  );
}

export default ProductDetailsPage;
