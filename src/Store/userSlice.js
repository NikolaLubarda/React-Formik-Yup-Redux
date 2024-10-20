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
      state.userData = action.payload;

      //local storage
      localStorage.setItem("test_user", JSON.stringify(action.payload));
    },
    testAction: (state, action) => {
      state.isActive = !state.isActive;
    },
    resetoreUserAction: (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
    },
  },
});

export const {
  logginUserAction,
  registerUserAction,
  testAction,
  resetoreUserAction,
} = userSlice.actions;
export default userSlice.reducer;
