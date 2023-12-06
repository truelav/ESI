import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

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

interface CartProduct {
    product: Product
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

const addToLocalStorage = (product) => {
    console.log(product)
    const { _id } = product.product

    const storageProduct = JSON.parse(localStorage.getItem(_id))

    if(storageProduct){
        storageProduct.cartQuantity = product.cartQuantity
    }

    localStorage.setItem(_id, JSON.stringify(product))
}


const removeFromLocalStorage = (_id) => {
    const storageProduct = JSON.parse(localStorage.getItem(_id))

    if(storageProduct){
        localStorage.removeItem(_id)
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const cartProd: CartProduct = action.payload;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const index = state.products.findIndex(({ product }) => product._id === cartProd.product._id)
            // console.log(index)
            if (index > -1) {
                state.totalAmount++
                state.products[index].cartQuantity++
            } else {
                // state.products.push({id: cartProd.product._id});
                state.products.push(cartProd);
            }   
            addToLocalStorage(cartProd)
        },

        removeProductFromCart: (state, action) => {
            const prodId: string = action.payload;
            console.log(prodId)
            state.products = state.products.filter(({ product }) => product._id !== prodId );
            removeFromLocalStorage(prodId)
        },

        updateCart: (state, action) => {
            const { productId, quantity } = action.payload;
            {/* 
               eslint-disable-next-line @typescript-eslint/ban-ts-comment */} 
              {/* 
              // @ts-ignore */}
            const cartItem = state.products.find((product) => product._id === productId);
      
            if (cartItem) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
              cartItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            console.log(state)
            state.products = [];
            state.totalAmount = 0
        },
    },
});

export const {  addProductToCart,  removeProductFromCart, updateCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
