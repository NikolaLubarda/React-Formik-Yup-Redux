import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    reducers: {
      logginUserAction: (state, action) => {
        console.log(action);
      },
      registerUserAction: (state, action) => {
        console.log(action);
      },
    },
  },
});

export const { logginUserAction, registerUserAction } = userSlice.actions;
export default userSlice.reducer;
