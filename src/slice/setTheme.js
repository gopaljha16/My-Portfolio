import { createSlice } from '@reduxjs/toolkit'

const setTheme = createSlice({
    name:"theme",
    initialState:{
        isDark:false
    },
    reducers:{
        changeTheme: (state) =>{
           state.isDark = !state.isDark;
        }
    }
})

export const {changeTheme } = setTheme.actions;
export default setTheme.reducer;