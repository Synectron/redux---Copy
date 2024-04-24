import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    fullName: "",
    Id: "",
    createdAt: "",
  },
  reducers: {
    createCustomer: (state, action) => {
      state.fullName = action.payload.fullName;
      state.Id = action.payload.Id;
      state.createdAt = action.payload.createdAt;
    },
    updateName: (state, action) => {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
