import { createSlice } from '@reduxjs/toolkit'

const initialState = {
hotelApp: "" || null,
toggle: false
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
    changeToggleTrue: (state: any) => {
      state.toggle = true
  },
  changeToggleFalse: (state: any) => {
      state.toggle = false
  }
  }
});

export const {createUser,logOutUser, changeToggleFalse, changeToggleTrue} = GlobalState.actions

export default GlobalState.reducer;