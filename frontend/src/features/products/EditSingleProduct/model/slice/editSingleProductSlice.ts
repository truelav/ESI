// editSingleProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    brand: "",
    model: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    quantity: "",
    upc: "",
    images: [],
    bulletpoints: []
  },
};

const editSingleProductSlice = createSlice({
  name: 'editSingleProduct',
  initialState,
  reducers: {
    setFormData: (state, action) => {
        state.formData = action.payload
    },
    setBrand: (state, action) => {
        state.formData.brand = action.payload;
    },
    setModel: (state, action) => {
        state.formData.model = action.payload;
      },
    setDescription: (state, action) => {
        state.formData.description = action.payload;
    },
    setPrice: (state, action) => {
        state.formData.price = action.payload;
    },
    setQuantity: (state, action) => {
        state.formData.quantity = action.payload;
    },    
    setUpc: (state, action) => {
        state.formData.upc = action.payload;
    },
    setImages: (state, action) => {
        state.formData.images = action.payload;
    },
      clearFormData: (state) => {
        state.formData = initialState.formData;
    },
    addImage: (state, action) => {
      state.formData.images.push(action.payload);
    },
    removeImage: (state, action) => {
      state.formData.images = state.formData.images.filter(
        (image) => image !== action.payload
      );
    },
    clearImages: (state) => {
      state.formData.images = [];
    },
  },
});

export const {
    setFormData,
    setBrand,
    setModel,
    setDescription,
    setPrice,
    setQuantity,
    setUpc,
    addImage,
    removeImage,
    clearImages,
    setImages,
    clearFormData,
} = editSingleProductSlice.actions;

export default editSingleProductSlice.reducer;