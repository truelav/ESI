// Products Page
// import { useEffect, useState } from "react";
// import axios from "axios";

// import axiosClient from "./lib/axios";

// import "./App.css";
// import { ProductList } from "./entities/Product/ui/ProductList/ProductList";

function ProductsPage() {
  // const [products, setProducts] = useState([]);

  // const getAllProducts = async () => {
  //   try {
  //     const allProducts = await axios.get("http://localhost:8888/api/products");
  //     if (allProducts.data) {
  //       setProducts(allProducts.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  return (
    <>
      <h1>ESI Enterprises</h1>
      {/* <div className="card">

        <ProductList products={products} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  );
}

export default ProductsPage;
