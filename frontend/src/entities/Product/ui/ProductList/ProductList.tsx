// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Product, ProductView } from "../../model/types/product";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import { useGetAllProductsQuery } from "../../../../app/api/apiSlice";
import { Product } from "../../model/types/product";
// interface ProductListProps {
//   className?: string;
//   products?: Product[];
//   isLoading?: boolean;
//   view?: ProductView;
// }

export const ProductList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();
  // const { className, products, isLoading } = props;
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const getAllProducts = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get("http://localhost:8888/api/products", {
  //       withCredentials: true,
  //     });
  //     if (!response.data) {
  //       console.log(response);
  //       return "No products found";
  //     }
  //     if (response.data) {
  //       setProducts(response.data);
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllProducts();
  // }, []);
  let content = <div></div>;

  if (isLoading) {
    content = <>Loading...</>;
  }

  if (isError) {
    content = <>No Products Found : {JSON.stringify(error)}</>;
  }

  if (isSuccess) {
    content = products.map((product: Product) => (
      <ProductListItem key={product._id} product={product} />
    ));
  }

  return (
    <>
      <h2>Products: </h2>
      <div>{content}</div>
    </>
  );
};
