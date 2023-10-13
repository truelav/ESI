// Products Page
import { useEffect, useState } from "react";
import axios from "axios";

// import axiosClient from "./lib/axios";

import { ProductList } from "../../entities/Product/ui/ProductList/ProductList";

function ProductsPage() {
  return (
    <>
      <h1>ESI Enterprises</h1>
      <div className="card">
        <ProductList />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default ProductsPage;
