import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../entities/Product/model/types/product";
import { User } from "./types/User/User";

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
    deleteSingleProduct: builder.mutation<{success: boolean; id: number}, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        providesTags: [{ type: "Products", id: "List" }],
      })
    }),
    deleteMultipleProducts: builder.mutation<{success: boolean; id: number}, number>({
      query: (productsIds) => ({
        url: `/products`,
        method: "DELETE",
        body: productsIds,
        providesTags: [{ type: "Products", id: "List" }],
      })
    }),

    // User API Routes [ 1. /auth  2. /login  3. /register]
    getAllUsers: builder.query<User, void>({
      query: () => `/auth/users`,
      providesTags: [{ type: "Users", id: "List" }],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddSingleProductMutation,
  useEditSingleProductMutation,
  useDeleteSingleProductMutation,
  useDeleteMultipleProductsMutation,

  useGetAllUsersQuery
} = apiSlice;
