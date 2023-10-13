import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "./types/product";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8888/api",
  credentials: "include",
  // prepareHeaders: (headers, { getState } ) => {
  //   const token = getState().auth.token

  //   if(token){
  //     headers.set("authorization", `Bearer ${token}`)
  //   }
  //   return headers
  // }
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Products", "Product", "Users"],
  endpoints: (builder) => ({
    // Products API Routes [ 1. /products  2. /products/:id]
    getAllProducts: builder.query<Product, void>({
      query: () => `/products`,
      providesTags: [{ type: "Products", id: "List" }],
    }),
    getSingleProduct: builder.query<Product, void>({
      query: (id) => `/products/${id}`,
      providesTags: [{ type: "Product", id: "List" }],
    }),
    addSingleProducts: builder.mutation<Product, Product>({
      query(product) {
        return {
          url: `/products`,
          method: "POST",
          body: product,
        };
      },
      invalidatesTags: [{ type: "Products", id: "List" }],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = apiSlice;
