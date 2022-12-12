import { url, fetchData } from './appointment-actions';
import { appoitmentActions } from "./appointment-slice";

export const removeAppoitment = id => async (dispatch) => {
  async function wrapper(params) {
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
    try {
      const appoitmentsData = await fetchData(`${url}/api/calendar/delete/meeting/${id}`, config);
    
      dispatch(appoitmentActions.removeAppoitment({
         id: id,
         status: 'success',
         message: 'L\'appuntamento è stato rimosso!'
      })); 

    } catch (error) {

      dispatch(appoitmentActions.addItems({
        id: id,
        status: 'error',
        message: 'Non sono riuscito a rimuovere l\appuntamento!'
      }))
    }
  }
  wrapper();
}