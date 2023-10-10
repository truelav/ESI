// Products Page
import { useEffect, useState } from "react";
import axios from "axios";

// import axiosClient from "./lib/axios";

import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8888/api/products", {
        withCredentials: true,
      });
      if (!response) {
        console.log(response);
        return "No products found";
      }
      if (response.data) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // let isMounted = true;
    // const controller = new AbortController()
    getAllProducts();

    return () => {
      console.log("cleanup getAllProducts");
    };
  }, []);

  return (
    <>
      <h1>ESI Enterprises</h1>
      <div className="card">
        <ProductList products={products} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default ProductsPage;
