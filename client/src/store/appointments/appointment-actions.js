import { appoitmentActions } from "./appointment-slice";

export const url = process.env.REACT_APP_API_URL;

export const fetchData = async (endPoint, config = {}) => {
  const response = await fetch(endPoint, config)
  
  if (!response.ok) {
    throw new Error('Could not fetch the data!');
  }

  const data = await response.json();

  return data;
}

export const fetchAppoitmentData = (selected) => {
  return (dispatch) => {
    async function wrapper(params) {
      try {
        const appoitmentsData = await fetchData(`${url}/calendar/${selected}`);
        dispatch(appoitmentActions.addItems({
          appointments: appoitmentsData?.appointments,
          total: appoitmentsData?.count,
          status: 'success',
          message: 'Questi sono gli appuntamenti che ho trovato!'
        }))
      } catch (error) {
  
        dispatch(appoitmentActions.addItems({
          appointments: [],
          total: 0,
          status: 'error',
          message: 'Non ho trovato nessun appuntamento!'
        }))
      }
    }
    wrapper();
  }
}

export const fetchSearchedAppoitment = (term) => {
  return (dispatch) => {
    async function wrapper(params) {
      try {
        const appoitmentsData = await fetchData(`${url}/appuntamenti/search=${term}`);

        dispatch(appoitmentActions.addItems({
          appointments: appoitmentsData?.appointments,
          total: appoitmentsData?.count,
          status: 'success',
          message: 'Questi sono gli appuntamenti che ho trovato!'
        }))
      } catch (error) {
  
        dispatch(appoitmentActions.addItems({
          appointments: [],
          total: 0,
          status: 'error',
          message: 'Non ho trovato nessun appuntamento!'
        }))
      }
    }
    wrapper();
  }
};

export const fetchByDate = (selectedDate) => {
   return async (dispatch) => {
     const config = {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         date: selectedDate
       }),
     }

    async function wrapper(params) {
      try {
        const appoitmentsData = await fetchData(`${url}/calendar/date/`, config);
    
        dispatch(appoitmentActions.addItems({
          appointments: appoitmentsData?.appointments,
          total: appoitmentsData?.count,
          status: 'success',
          message: 'Questi sono gli appuntamenti che abbiamo trovato in base alla tua ricercha!'
        }))
      } catch (error) {
  
        dispatch(appoitmentActions.addItems({
          appointments: [],
          total: 0,
          status: '',
          message: 'Non ho trovato nessun appuntamento!'
        }))
      }
    }
    wrapper();
   };
};

