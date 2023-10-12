import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ 
  baseUrl: "http://localhost:8888/api/",
  credentials: 'include',
  prepareHeaders: (headers, { getState } ) => {
    const token = getState().auth.token

    if(token){
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({}),
});
