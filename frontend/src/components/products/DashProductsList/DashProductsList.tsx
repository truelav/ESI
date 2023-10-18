
import { useGetAllProductsQuery } from "../../../app/api/apiSlice";
import { DashProductListItem } from "../DashProductListItem/DashProductListItem";
import { Product } from "../../../entities/Product/model/types/product";
import { DashProductListHead } from "./DashProductListHead";
import { useState } from "react";

export const DashProductsList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();
  const [allProducts, setAllProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState({})
  const handleToggleSelectProducts = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if(selectedProducts[id]){
      setSelectedProducts({
        ...selectedProducts,
        [id]: false
      })
    } else {
      setSelectedProducts({
        ...selectedProducts,
        [id]: true
      })
    }
    console.log(selectedProducts)
  }

  let content = <div></div>;

  if (isLoading) {
    content = <>Loading...</>;
  }

  if (isError) {
    content = <>No Products Found : {JSON.stringify(error)}</>;
  }

  if (isSuccess) {
    content =  (
      <>
        <DashProductListHead />
        {products.map((product: Product) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
          <DashProductListItem key={product._id} product={product} handleToggleSelectProducts={handleToggleSelectProducts}/>
        ))}
      </>
    )
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
};
