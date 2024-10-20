import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    isActive: false,
  },
  reducers: {
    loggoutUserAction: (state, action) => {
      console.log(action);
      state.userData = {};
      localStorage.removeItem("test_user");
    },
    registerUserAction: (state, action) => {
      state.userData = action.payload;

      //local storage
      localStorage.setItem("test_user", JSON.stringify(action.payload));
    },
    testAction: (state, action) => {
      state.isActive = !state.isActive;
    },
    resetoreUserAction: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {
  loggoutUserAction,
  registerUserAction,
  testAction,
  resetoreUserAction,
} = userSlice.actions;
export default userSlice.reducer;
