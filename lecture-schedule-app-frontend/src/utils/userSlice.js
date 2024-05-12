import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: null,
  reducers: {
    setUser: (state, action) => state = action.payload,
    clearUser: (state, action) => (state = null),
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
