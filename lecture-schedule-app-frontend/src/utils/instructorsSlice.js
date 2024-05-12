import { createSlice } from "@reduxjs/toolkit";

const instructorsSlice = createSlice({
    name: "instructorSlice",
    initialState: null,
    reducers: {
        setStoreInstructor: (state, action) => action.payload,
        
    }
})

export const {setStoreInstructor} = instructorsSlice.actions;

export default instructorsSlice.reducer;