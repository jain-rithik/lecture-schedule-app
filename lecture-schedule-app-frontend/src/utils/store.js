import {configureStore} from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import instructorsSlice from "./instructorsSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        courseSlice: coursesSlice,
        instructorSlice: instructorsSlice,
        userSlice: userSlice,
    }
})

export default store;