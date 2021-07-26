import { createSlice } from "@reduxjs/toolkit";


export type State = {
  user: { userInfo: { email: string; uid: string } };
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: State) => state.user.userInfo;

export default userSlice.reducer;
