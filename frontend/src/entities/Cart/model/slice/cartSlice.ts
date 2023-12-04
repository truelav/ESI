import { createSlice } from "@reduxjs/toolkit";

interface Product {
    _id: string;
    name: string;
    brand: string;
    updatedAt: string;
    description: string;
    category: string;
    subcategory: string;
    price?: string;
    quantity?: number;
    images?: File | null | Blob | string;
    model: string;
    upc: string;
}

interface CartProduct extends Product {
    cartQuantity: number
}

interface CartState {
    products: CartProduct[],
    totalAmount: number
}

const initialState: CartState =  {
    products: [],
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const cart: CartProduct = action.payload;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // const isProdInCart = state.products.find(({ model }) => model === cart.product.model )
            console.log(cart)
            // if (isProdInCart) {
            //     isProdInCart.cartQuantity += cart.cartQuantity
            // } else {
                // If the product is not in the cart, add it
            // }
            state.products.push(cart);
        },

        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(
                (id) => id !== action.payload
            );
        },

        setProductNumber: (state, action) => {
            const { productId, quantity } = action.payload;
            const cartItem = state.products.find((product: Product) => product._id === productId);
      
            if (cartItem) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
              cartItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const {  addProductToCart,  removeProductFromCart, setProductNumber, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
