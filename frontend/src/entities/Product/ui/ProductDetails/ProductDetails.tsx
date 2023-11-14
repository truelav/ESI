import { memo } from "react";
import { Button, Grid, GridItem, Container } from "@chakra-ui/react";
import { useGetSingleProductQuery } from "../../../../app/api/apiSlice";

import { Link, useParams } from "react-router-dom";
import { ProductDetailsImage } from "./ProductsDetailsImage";
import { ProductDetailsInfo } from "../ProductDetailsInfo/ProductDetailsInfo";

// interface ProductDetailsItemProps {
//   className?: string;
//   product?: Product;
//   view?: ProductView;
// }

export const ProductDetails = memo(() => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleProductQuery(id);

  let content = <div></div>;

  if (isLoading) {
    content = <>Loading...</>;
  }

  if (isError) {
    content = <>No Products Found : {error}</>;
  }

  if (isSuccess) {
    content = (
      <Container>
        <Grid>
          <GridItem>
              <ProductDetailsImage />
          </GridItem>
          <GridItem>
              <ProductDetailsInfo />
            </GridItem>
        </Grid>
      </Container>
    );
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
});
