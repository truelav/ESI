import { useState } from "react"; 
import { Divider } from "@chakra-ui/react";

import { useGetAllProductsQuery } from "../../../app/api/apiSlice";
import { DashProductListHead } from "./DashProductListHead";
import { ProductItemHorizontal } from "../../../shared/ui/Product/ProductItemHorizontal/ProductItemHorizontal";
import { Product } from "../../../entities/Product/model/types/product";

export const DashProductsList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();
  // const [allProducts, setAllProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState({});
  const handleToggleSelectProducts = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (selectedProducts[id]) {
      setSelectedProducts({
        ...selectedProducts,
        [id]: false,
      });
    } else {
      setSelectedProducts({
        ...selectedProducts,
        [id]: true,
      });
    }
  };

  let content = <div></div>;

  if (isLoading) {
    content = <>Loading...</>;
  }

  if (isError) {
    content = <>No Products Found : {JSON.stringify(error)}</>;
  }

  if (isSuccess) {
    content = (
      <>
        <DashProductListHead />
        <Divider orientation="horizontal"/>
        <div>
          {products?.map((product: Product) => (
            <ProductItemHorizontal
              key={product._id}
              product={product}
              handleToggleSelectProducts={handleToggleSelectProducts}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
};
