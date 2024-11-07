
//import two things always
//create slice jo global state bnaye gii

import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

//check user 
const checkuser = JSON.parse(localStorage.getItem("user"))





//create your State

const initialState = {
    user: checkuser ? checkuser : null,
    userLoading:false,
    userSuccess:false,
    userError:false,
    userMessage:""
}

// get the function from the service

export const registerUserData = createAsyncThunk('register-user',async(userData,thunkAPI)=>{
    try {
        return await registerUserData(userData)
        
    } catch (error) {
        console.log(error)
    }
})











//Create your Slice
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {}, // main wo fucntions ayen ge jo state ko change karin ge
    extraReducers: (builder)=>{
        builder
        .addCase(registerUserData.pending,(state,action)=>{
            state.userLoading = true
        })
        .addCase(registerUserData.error,(state,action)=>{
            state.userError = true
            state.userLoading = false
            state.userMessage = action.payload
            state.user = null
        })

        .addCase(registerUserData.fulfilled,(state,action)=>{
            state.userSuccess = true
            state.userLoading = false
            state.user = action.payload
        })
    } // shows pending, success, rejection state mai ha
})

//export your slice into the store
export default userSlice.reducer;




