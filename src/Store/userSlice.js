import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    isActive: false,
  },
  reducers: {
    logginUserAction: (state, action) => {
      console.log(action);
    },
    registerUserAction: (state, action) => {
      console.log(action.payload);
    },
    testAction: (state, action) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { logginUserAction, registerUserAction, testAction } =
  userSlice.actions;
export default userSlice.reducer;
