import { createSlice } from "@reduxjs/toolkit";
export type RoleState = {
  role: { role: string };
};

export const roleSlice = createSlice({
  name: "role",
  initialState: { role: null },
  reducers: {
    updateRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { updateRole } = roleSlice.actions;
export const selectRole = (state: RoleState) => state.role.role;

export default roleSlice.reducer;
