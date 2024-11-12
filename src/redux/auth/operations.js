import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
baseURL : "https://connections-api.goit.global/",
}
)

export const setToken = (token) => {
authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
 };

 export const clearToken =() => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiRegisterUser = createAsyncThunk(
    "auth/registerUser",
    async (formData, thunkApi)=>{
        //formData {name:"_", "email":"_@_", "password":"_"}
        try{
        const {data} = await authInstance.post("/users/signup", formData);
        setToken(data.token)
        return data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const apiLoginUser = createAsyncThunk(
    "auth/loginUser",
    async (formData, thunkApi)=>{
        //formData { "email":"_@_", "password":"_"}
        try{
        const {data} = await authInstance.post("/users/login", formData);
        setToken(data.token)
        return data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);