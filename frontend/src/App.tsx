import { useEffect, useState } from "react";
import axios from "axios";

// import axiosClient from "./lib/axios";
import { Navbar } from "./widgets/Navbar";

import "./App.css";
import { ProductList } from "./entities/Product/ui/ProductList/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const allProducts = await axios.get("http://localhost:8888/api/products");
      if (allProducts.data) {
        setProducts(allProducts.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar />
      <h1>ESI Enterprises</h1>
      <div className="card">
        {/* {products.map((item, idx) => (
          <div key={item?._id}>
            <p>{item?.name}</p>
          </div>
        ))} */}
        <ProductList products={products} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;