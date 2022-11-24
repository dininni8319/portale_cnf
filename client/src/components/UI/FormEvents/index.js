import { useState } from "react";
import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { 
  DettagliAppuntamento, 
  Orari, 
  Richiedente, 
  Riepilogo, 
  StepsComponent, 
  Ufficio } from "./link-form-comp";
import classes from './style.module.css';
import { validateForm } from '../../../utilities';

const FormEvents = () => {
  const navigate = useNavigate()
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
    setIsSubmited(true);
    
    if (Object.keys(formErrors).length === 0) {
      fetch(`http://localhost:8000/api/calendar/create/event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.event);
          if (data.event.googleEvent.id) {
            setMessage(data.msg);
            navigate('/adminarea');
          }
          navigate('/adminarea');
        });
    } 
  };

  return ( 
    <div className={`${classes.formContainer}`}>
      <form className="mb-3 row p-5 bg-gray d-md-flex align-items-center mt-5 col-md-5" onSubmit={handleSubmit}>
        {/* { Object.keys(formErrors).length === 0 && isSubmited && <span className="text-white bg-green-custom fs-5 fw-bold px-5 py-2">La tua richiesta è stata inviata correttamente</span> } */}
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
       {message && <div className="text-success fs-4 fw-bold">{message}</div>}
        <StepsComponent 
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