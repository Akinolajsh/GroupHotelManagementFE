import { createSlice } from '@reduxjs/toolkit'

const initialState = {
hotelApp: "" || {} || null
}

const GlobalState = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    createUser:(state: any, {payload}: any)=>{
        state.hotelApp = payload
    },
    logOutUser:(state: any)=>{
        state.hotelApp = null
    },
  }
});

export const {createUser,logOutUser} = GlobalState.actions

export default GlobalState.reducer;