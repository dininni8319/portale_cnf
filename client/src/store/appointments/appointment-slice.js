import { createSlice } from "@reduxjs/toolkit";

const appoitmentSlice = createSlice({
  name: 'appoitment',
  initialState: {
    data: [],
    total: 0,
    status: '',
    message: '',
    dateAppointment: '', 
    selectedAppointments: '',
    term: '',
    currentDateAppointments: '',
    show: false,
    isIdCard: 0,
    modal: false,
    itemOffset: 0,
    isCalendar: true,
  },
  reducers: {
    addItems(state, action) {
      const { appointments, total, status, message } = action.payload;
      state.data = appointments;
      state.total = total;
      state.status = status;
      state.message = message;
      state.isCalendar = false;
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
      state.total = state.total - 1;
      state.modal = false;
    },
    hideCalendar(state, action) {
      state.isCalendar = false;
    },
    showCalendar(state, action) {
      state.isCalendar = !state.isCalendar;
      state.data = [];
      state.total = 0;
      state.status = '';
      state.message = '';
    },
    handleModal(state, action) {
      state.modal = action.payload.modal;
      state.isIdCard = action.payload.id;
    },
    closeModal(state, action) { 
      state.modal = false;
    }, 
    handleTerm(state, action) {
      state.term = action.payload.term
    },
    handleDate(state, action) {
      state.currentDateAppointments = action.payload.currentDateAppointments
    },
    handleAppointments(state, action) {
      state.selectedAppointments = action.payload.selectedAppointments
    }
    
  }
});


export const appoitmentActions = appoitmentSlice.actions;

export default appoitmentSlice;
