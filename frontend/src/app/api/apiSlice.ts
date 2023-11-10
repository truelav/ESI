/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../entities/Product/model/types/product";
import { GroupedProducts } from "./types/Product";
import { User } from "./types/User/User";

// @ts-nocheck

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8888/api",
    credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;

    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Products", "Product", "User"],
    endpoints: (builder) => ({
        // Products API Routes [ 1. /products  2. /products/:id]
        getAllProducts: builder.query<Product, void>({
            query: () => `/products`,
            providesTags: [{ type: "Products", id: "List" }],
        }),

        getGroupedProducts: builder.query<GroupedProducts[], void>({
            query: () => `/products`,
            /* eslint-disable-next-line padded-blocks */
            // @ts-nocheck
            transformResponse: (response: Product[]) => {
                // Modify the response data as needed
                const groupedProducts: { [brand: string]: Product[] } = {};

                response.forEach((product: Product) => {
                    const { brand } = product;
                    // if (!groupedProducts[brand]) {
                    // }

                    groupedProducts[brand] = [];
                    groupedProducts[brand].push(product);
                });

                // // Convert the grouped products into an array of objects
                const transformedData = Object.entries(groupedProducts).map(
                    ([brand, products]) => ({
                        brand,
                        products,
                    })
                );

                return transformedData;
            },
            // providesTags: [{ type: "Products", id: "List" }],
        }),

        getSingleProduct: builder.query<Product, void>({
            query: (id) => `/products/${id}`,
            providesTags: [{ type: "Product", id: "List" }],
        }),

        addSingleProduct: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
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

        deleteSingleProduct: builder.mutation<
            { success: boolean; id: string },
            string
        >({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
                providesTags: [{ type: "Products", id: "List" }],
            }),
        }),

        deleteMultipleProducts: builder.mutation<
            { success: boolean; id: number },
            number
        >({
            query: (productsIds) => ({
                url: `/products`,
                method: "DELETE",
                body: productsIds,
                providesTags: [{ type: "Products", id: "List" }],
            }),
        }),

        // User API Routes [ 1. /auth  2. /login  3. /register]
        getAllUsers: builder.query<User, void>({
            query: () => `/auth/users`,
            providesTags: ["User"],
        }),

        addUser: builder.mutation<User, User>({
            query: (user) => ({
                url: `/auth/users`,
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        editUser: builder.mutation<User, User>({
            query: (user) => ({
                url: `/auth/users`,
                method: "PUT",
                body: user,
            }),
        }),

        deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: `/auth/users/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["User"],
        }),
        // Authorization API Routes [ 1. /auth  2. /login  3. /register]
        login: builder.mutation<unknown, User>({
            query: (user) => ({
                url: `/auth/login`,
                method: "POST",
                body: { ...user },
            }),
        }),
        logout: builder.mutation<unknown, User>({
            query: (user) => ({
                url: `/auth/logout`,
                method: "POST",
                body: user,
            }),
        }),
        // Presentation API Routese

        createPresentation: builder.mutation<unknown, void>({
            query: (products) => ({
                url: `/presentation`,
                method: "POST",
                body: { prodIDs: products },
            }),
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

    useGetGroupedProductsQuery,

    useGetAllUsersQuery,
    useAddUserMutation,
    useEditUserMutation,
    useDeleteUserMutation,

    useLoginMutation,
} = apiSlice;
