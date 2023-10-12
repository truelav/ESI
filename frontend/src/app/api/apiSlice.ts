import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fBaseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8888" })

export const apiSlice = createApi({
  baseQuery: fBaseQuery,
  tagTypes: ["Product", "User"],
  
  endpoints: (builder) => ({}),
});
