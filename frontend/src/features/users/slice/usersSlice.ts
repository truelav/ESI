import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: 'http://localhost:8888/api',
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.userToken
    //   if (token) {
    //    // include token in req header
    //     headers.set('authorization', `Bearer ${token}`)  
    //     return headers
    //   }
    // },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetAllUsersQuery } = authApi
