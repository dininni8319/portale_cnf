import { useEffect, useState } from "react";
import useInput from "../../Hooks/useInput";
import DettagliAppuntamento from "./DettagliAppuntamento";
import Orari from "./Orari";
import Richiedente from "./Richiedente";
import Riepilogo from "./Riepilogo";
import StepsComponents from "./StepsComponent";
import classes from './style.module.css';
import Ufficio from "./Ufficio";
import { validateForm } from '../../../utilities';

const FormEvents = () => {

  const email = useInput("");
  const first_name = useInput("");
  const last_name = useInput("");
  const codicefiscale = useInput("");

  const tipologiaRichiesta = useInput("");
  const ufficio = useInput("");
  const description = useInput("");
  const phone = useInput("");

  const [message, setMessage] = useState('');
  const [ step, setStep ]= useState(1);
  const [ formErrors, setFormErrors ] = useState({});
  const [ isSubmited, setIsSubmited ] = useState(false);
  const [ date, setDate ] = useState({});
  const [ isClicked, setIsClicked ] = useState(false)

  const errors = Object.keys(formErrors).length > 0 && Object.values(formErrors);
  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(prevStep => prevStep > 1 ? prevStep - 1 : prevStep );
  }

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(nextStep => nextStep < 5 ? nextStep + 1 : nextStep );
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessage('')
  //     setFormErrors({});
  //   }, 300000);
  // }, [isSubmited, formErrors])

  const config = {
    email: email.value, 
    first_name: first_name.value,
    last_name: last_name.value,
    description: description.value,
    date: date.giorno_appuntamento,
    time: date.start,
    codicefiscale: codicefiscale.value,
    tipologiaRichiesta: tipologiaRichiesta.value,
    ufficio: ufficio.value,
    phone: phone.value,
    meeting_id: date.id
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFormErrors(validateForm(config));

    if (Object.keys(formErrors).length === 0) {
      
      fetch(`http://localhost:8000/api/calendar/create/event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      })
        .then((response) => response.json())
        .then((data) => {
          
          if (data.stato_prenotazione === true) {
           
            setIsSubmited(true);
            setMessage(data.message);
          } else {

            setIsSubmited(false);
            setMessage(data.message);
          }
          setMessage('Qualcosa e andato storto');
        });
    } 
  };

  return ( 
    <div className={`${classes.formContainer}`}>
      <form className="mb-3 row p-5 bg-gray d-md-flex align-items-center mt-5 col-md-5" onSubmit={handleSubmit}>
        
        <h2 className="mb-3 h2 mt-2">Prenota un appuntamento</h2>
        {step === 1 && <Ufficio ufficio={ufficio} />}

        {step === 2 && <Orari 
            date={date} 
            setDate={setDate} 
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        }

        {step === 3 && <DettagliAppuntamento 
                          description={description} 
                          tipologiaRichiesta={tipologiaRichiesta}  
                        />
        }

        {step === 4 && <Richiedente 
                          first_name={first_name} 
                          last_name={last_name}
                          email={email}
                          codicefiscale={codicefiscale}
                          phone={phone}
                        />
        }

        {step === 5 && <Riepilogo config={config}/>}
        
         <div className='mt-2 d-flex flex-column'>
            {Object.keys(formErrors).length > 0 && errors?.map((err, id) => {
            return <span key={id} className='text-danger fs-6'>{err}</span>
          })}
         </div>
      </form>       
       {message && <div className={`${isSubmited ? 'text-success' : 'text-danger'} fs-4 fw-bold`}>{message}</div>}
        <StepsComponents 
              handlePrevStep={handlePrevStep}
              handleNextStep={handleNextStep}
              handleSubmit={handleSubmit}
              step={step}
              formErrors={formErrors}
        />
    </div>  
   );
}
 
export default FormEvents;