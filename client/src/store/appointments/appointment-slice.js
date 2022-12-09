import { createSlice } from "@reduxjs/toolkit";

const appoitmentSlice = createSlice({
  name: 'appoitment',
  initialState: {
    data: [],
    total: 0,
    status: '',
    message: ''
  },
  reducers: {
    addItems(state, action) {
      state.data = action.payload.appointments;
      state.total = action.payload.total;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
  }
});


export const appoitmentActions = appoitmentSlice.actions;

export default appoitmentSlice;
