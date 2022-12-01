import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    message: 'hello world',
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
    
    resetSteps(state, action){
      state.step = 1;
    },

    checkForErrors(state, action) {
      state.errors = action.payload;
    },

    setErrorsToNull(state, action) {
      state.errors = {};
    },
    
    setMessage(state, action){
      state.message = action.payload;
    },

    setIsSubmited(state, action) {
      state.isSubmited = action.payload;
    }
  }
});

export const formActions = formSlice.actions;

export default formSlice;