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
    addSingleProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: `/products`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: [{ type: "Products", id: "List" }],
    }),
    editSingleProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: `/products`,
        method: "PUT",
        body: product,
      }),
    }),
    // User API Routes [ 1. /auth  2. /login  3. /register]
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddSingleProductMutation,
  useEditSingleProductMutation,
} = apiSlice;
