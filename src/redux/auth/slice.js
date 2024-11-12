import { createSlice } from "@reduxjs/toolkit";
import { apiRegisterUser, apiLoginUser } from "./operations";


const authSlice = createSlice({
  name: "auth",
  initialState:{
   userData: null,
   isLoading:false,
   error:null,

   token:null,
   isRefreshing: false,
   isLoggedIn: false,
},
  extraReducers: (builder)=>
     builder.addCase(apiRegisterUser.pending,(state)=>{
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiRegisterUser.fulfilled,(state, action)=>{
    state.isLoading = false;
    state.isRefreshing =true;
    state.token = action.payload.token;
    state.userData = action.payload.user;
    state.error = null;
  })
  .addCase(apiRegisterUser.rejected,(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(apiLoginUser.pending,(state)=>{
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiLoginUser.fulfilled,(state, action)=>{
    state.isLoading = false;
    state.isLoggedIn =true;
    state.token = action.payload.token;
    state.userData = action.payload.user;
    state.error = null;
  })
  .addCase(apiLoginUser.rejected,(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
  })
});

export const authReducer = authSlice.reducer;

export const selectUsersData = state => state.auth.userData
export const selectUsersDataIsLoading = state => state.auth.isLoading
export const selectUsersDataError = state => state.auth.error
export const selectUsersDataIsLoggedIn = state => state.auth.isLoggedIn
export const selectUsersDataIsRefreshing = state => state.auth.isRefreshing
export const selectUsersToken = state => state.auth.Token




