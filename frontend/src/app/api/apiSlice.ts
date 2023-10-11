import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8888" }),
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({}),
});
