import { appoitmentActions } from "./appointment-slice";

const url = process.env.REACT_APP_API_URL;

export const fetchAppoitmentData = (selected) => {
  
  return (dispatch) => {
     
    const fetchData = async () => {
      const response = await fetch(`${url}/api/calendar/${selected}`)
      
      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    }

    async function wrapper(params) {
      try {
        
        const appoitmentsData = await fetchData();
  
        // console.log(appoitmentsData, 'testing the datain the ftc');
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
    
    const fetchData = async () => {
      const response = await fetch(`${url}/api/appuntamenti/search=${term}`)
      
      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    }

    async function wrapper(params) {
      try {
        
        const appoitmentsData = await fetchData();
  
        // console.log(appoitmentsData, 'testing the datain the ftc');
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
   return async(dispatch) => {
    dispatch(appoitmentActions.addItems({
      appointments: [],
      total: 0,
      status: 'pending',
      message: 'Requesting the data!'
    }));

    const sendRequest = async () => {
      const response = fetch(`${url}/api/calendar/date/`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate
        }),
      });
      
      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      console.log(data, 'date');
      return data;
    }

    async function wrapper(params) {
      try {
        
        const appoitmentsData = await sendRequest();

        // console.log(appoitmentsData, 'testing the datain the ftc');
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
          status: 'error',
          message: 'Non ho trovato nessun appuntamento!'
        }))
      }
    }
    
    wrapper();
   };
};

