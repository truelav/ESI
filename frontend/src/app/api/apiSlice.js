import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
    tagTypes: ["Product", "User", "Order", "Profile"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`,
            providesTags: ["Product"],
        }),
        getGroupedProducts: builder.query({
            query: () => `/products/brandedProducts`,
            providesTags: ["Product"],
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        addSingleProduct: builder.mutation({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product,
                formData: true,
            }),
            invalidatesTags: ["Product"],
        }),
        addMultipleProducts: builder.mutation({
            query: (products) => ({
                url: `products/addMultiple`,
                method: "POST",
                body: products,
                formData: true,
            }),
        }),
        editSingleProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: "PUT",
                body: product,
                formData: true,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteSingleProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
                providesTags: [{ type: "Products", id: "List" }],
            }),
        }),
        deleteMultipleProducts: builder.mutation({
            query: (productIds) => ({
                url: `/products`,
                method: "DELETE",
                body: productIds,
                providesTags: [{ type: "Product", id: "List" }],
            }),
            invalidatesTags: [{ type: "Product", id: "List" }],
        }),
        // User API Routes [ 1. /auth  2. /login  3. /register]
        getAllUsers: builder.query({
            query: () => `/auth/users`,
            providesTags: ["User"],
        }),
        getUserProfile: builder.query({
            query: (id) => `/auth/users/${id}`,
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: `/auth/register`,
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),
        editUser: builder.mutation({
            query: (user) => ({
                url: `/auth/users`,
                method: "PUT",
                body: user,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/auth/users/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["User"],
        }),
        activateDeactivateUser: builder.mutation({
            query: (id) => ({
                url: `/auth/users/activate/${id}`,
                method: "PUT",
                body: id,
            }),
        }),
        // Authorization API Routes [ 1. /auth  2. /login  3. /register]
        login: builder.mutation({
            query: (user) => ({
                url: `/auth/login`,
                method: "POST",
                body: { ...user },
            }),
        }),
        logout: builder.mutation({
            query: (user) => ({
                url: `/auth/logout`,
                method: "POST",
                body: user,
            }),
        }),
        signup: builder.mutation({
            query: (user) => ({
                url: `/auth/signup`,
                method: "POST",
                body: { ...user },
            }),
        }),
        // Presentation API Routes
        getPresentationProducts: builder.query({
            query: () => `/presentation/products`,
            providesTags: [{ type: "Product", id: "List" }],
        }),
        createPresentation: builder.mutation({
            query: (products) => ({
                url: `/presentation`,
                method: "POST",
                body: products,
            }),
        }),
        addToCart: builder.mutation({
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
        getAllOrders: builder.query({
            query: () => `/orders`,
            providesTags: ["Order"],
        }),
        placeOrder: builder.mutation({
            query: (order) => ({
                url: `/orders`,
                method: "POST",
                body: order,
            }),
        }),
        deleteOrders: builder.mutation({
            query: (orders) => ({
                url: `/orders`,
                method: "DELETE",
                body: orders,
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
    useAddMultipleProductsMutation,
    useGetGroupedProductsQuery,
    useGetAllUsersQuery,
    useAddUserMutation,
    useEditUserMutation,
    useActivateDeactivateUserMutation,
    useDeleteUserMutation,
    useLoginMutation,
    useGetUserProfileQuery,
    useSignupMutation,
    useCreatePresentationMutation,
    useGetAllOrdersQuery,
    usePlaceOrderMutation,
    useDeleteOrdersMutation,
} = apiSlice;
