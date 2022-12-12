import { createSlice } from "@reduxjs/toolkit";

const appoitmentSlice = createSlice({
  name: 'appoitment',
  initialState: {
    data: [],
    total: 0,
    status: '',
    message: '',
    isCalendar: true,
    dateAppointment: '', 
  },
  reducers: {
    addItems(state, action) {
      const { appointments, total, status, message } = action.payload;
      state.data = appointments;
      state.total = total;
      state.status = status;
      state.message = message;
    },
    removeItems(state, action) {
      state.data = [];
      state.total = 0;
      state.status = '';
      state.message = '';
    },
    removeAppoitment(state, action) {
      const { id, message, status } = action.payload;
      let newAppointments = state.data.filter(appoitment => appoitment.id !== id);
      state.data = newAppointments;
      state.message = message;
      state.status = status;
    },
    hideCalendar(state, action) {
      state.isCalendar = false;
    },
    showCalendar(state, action) {
      state.isCalendar = true;
    }
  }
});


export const appoitmentActions = appoitmentSlice.actions;

export default appoitmentSlice;
