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
            const cartProd: CartProduct = action.payload;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            console.log(state.products.length)
            const index = state.products.findIndex(({ product }) => product._id === cartProd.product._id)
            // console.log(index)
            if (index > -1) {
                state.totalAmount++
                state.products[index].cartQuantity++
            } else {
                // state.products.push({id: cartProd.product._id});
                state.products.push(cartProd);
            }   
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
