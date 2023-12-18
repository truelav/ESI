/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../entities/Product/model/types/product";
import { FormDataProps } from "../../shared/ui/Modals/ImportProducts/ImportProductsModal";
import { Order } from "./types/Cart/Order";
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
    tagTypes: ["Products", "Product", "User", "Order"],
    endpoints: (builder) => ({
        // Products API Routes [ 1. /products  2. /products/:id]
        getAllProducts: builder.query<Product, void>({
            query: () => `/products`,
            providesTags: [{ type: "Products", id: "List" }],
        }),

        getGroupedProducts: builder.query<GroupedProducts[], void>({
            query: () => `/products/brandedProducts`,
            providesTags: [{ type: "Products", id: "List" }],
        }),

        getSingleProduct: builder.query<Product, string | undefined>({
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

        addMultipleProducts: builder.mutation<unknown, FormDataProps>({
            query: (products) => ({
                url: `products/addMultiple`,
                method: "POST",
                body: products,
                formData: true,
            }),
            invalidatesTags: [{ type: "Products", id: "List" }],
        }),

        editSingleProduct: builder.mutation<Product, Product>({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: "PUT",
                body: product,
                formData: true,
            }),
            invalidatesTags: [{ type: "Products", id: "List" }],
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
            { success: boolean; productsIds: [] },
            number
        >({
            query: (productIds) => ({
                url: `/products`,
                method: "DELETE",
                body: productIds,
                providesTags: [{ type: "Products", id: "List" }],
            }),
            invalidatesTags: [{ type: "Products", id: "List" }],
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
                body: products,
            }),
        }),

        // Cart Routes
        placeOrder: builder.mutation<unknown, Order>({
            query: (order) => ({
                url: `/cart/placeOrder`,
                method: "POST",
                body: order,
            }),
        }),

        addToCart: builder.mutation<unknown, void>({
            query: (products) => ({
                url: `/order`,
                method: "POST",
                body: products,
            }),
        }),

        removeFromCart: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
        clearCart: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),
        getCartInfo: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
        }),

        //Orders
        getAllOrders: builder.query<Order, void>({
            query: () => `/orders`,
            providesTags: ["Order"],
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

    useAddMultipleProductsMutation,
    useGetGroupedProductsQuery,

    useGetAllUsersQuery,
    useAddUserMutation,
    useEditUserMutation,
    useDeleteUserMutation,

    useLoginMutation,

    useCreatePresentationMutation,

    usePlaceOrderMutation,

    useGetAllOrdersQuery,
} = apiSlice;
