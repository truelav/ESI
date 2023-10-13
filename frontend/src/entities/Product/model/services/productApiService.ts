import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Product } from "../types/product";

export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8888/api/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product, void>({
      query: () => `products`,
      providesTags: [{ type: "Products", id: "List" }],
    }),
  }),
});
