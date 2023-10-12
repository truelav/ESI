import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

interface authProps {
    email: string;
    password: string;
}

export const authService = createAsyncThunk(
    "auth/login",
    async (authData, {extra, dispatch, rejectWithValue}) => {
        try {

            // const response = await extra.api.post("login", authData)

            // if (!response.data) {
            //     throw new Error();
            // }

            // localStorage.setItem(
            //     "USER_LOCALSTORAGE_KEY",
            //     JSON.stringify(response.data)
            // );

            // dispatch(userActions)
            const response = await axios.post(
                `http://localhost:8888/api/auth/login`,
                authData,
                {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                }
            )

            if(!response){
                console.log('soemthing went wron AuthService login')
            }

            console.log(response.data)
            // dispatch()and save this into User Slice info
            // but at the moment we will save it in localstorage

            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data

        } catch(error){
            console.log(error)
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
              } else {
                return rejectWithValue(error.message)
            }
        }
    }
)