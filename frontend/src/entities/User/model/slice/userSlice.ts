import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
// import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const userAdapter = createEntityAdapter({});
const initialState = userAdapter.getInitialState();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem("USER_LOCALSTORAGE_KEY");
      if (!user) {
        state.authData = JSON.parse(user);
      }
      state._initiated = true;
    },
    logout: (state) => {
      state.authData = null;
    },
  },
});
