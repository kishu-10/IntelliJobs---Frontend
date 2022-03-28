import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      id: null,
      name: "",
      username: "",
      email: "",
      user_type: "",
      verified_email: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
