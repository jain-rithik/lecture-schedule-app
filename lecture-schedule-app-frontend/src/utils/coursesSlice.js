import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
    name: "courseSlice",
    initialState: null,
    reducers: {
        setStoreCourses: (state, action) => action.payload,
        
    }
})

export const {setStoreCourses} = coursesSlice.actions;

export default coursesSlice.reducer;