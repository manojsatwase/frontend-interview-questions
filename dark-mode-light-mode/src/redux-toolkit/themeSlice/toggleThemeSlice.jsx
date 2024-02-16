import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isDarkMode:false
}

const toggleThemeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
    toggleSwitch(state){
        state.isDarkMode = !state.isDarkMode;
    }
}
})

export const {toggleSwitch} = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;