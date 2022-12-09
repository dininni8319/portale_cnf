import { configureStore } from "@reduxjs/toolkit";

import appoitmentSlice from "./appointments/appointment-slice";
import formSlice from "./form-slice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    appoitment: appoitmentSlice.reducer,
  }
});

export default store;