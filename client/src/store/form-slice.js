import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    message: '',
    step: 1,
    errors: {},
    isSubmited: false,
    isClicked: false,
  },
  reducers: {
    previusFormStep(state, action) {

      if (state.step === 0) {
        return state.step;
      }
      state.step--;
    },

    nextFormStep(state, action) {
      
      if (state.step === 5) {
        return state.step;
      }
      state.step++;
    },
    
    checkForErrors(state, action) {
      state.errors = action.payload;
    }
  }
});

export const formActions = formSlice.actions;

export default formSlice;