import { useState } from "react";
import useInput from "../../Hooks/useInput";
import DettagliAppuntamento from "./DettagliAppuntamento";
import Orari from "./Orari";
import Richiedente from "./Richiedente";
import Riepilogo from "./Riepilogo";
import StepsComponents from "./StepsComponent";
import classes from './style.module.css';
import Ufficio from "./Ufficio";

const FormEvents = () => {
  const email = useInput("");
  const first_name = useInput("");
  const last_name = useInput("");
  const codicefiscale = useInput("");
  const date = useInput("");
  const time = useInput("");
  const tipologiaRichiesta = useInput("");
  const ufficio = useInput("");
  const description = useInput("");
  const phone = useInput("");
  const [ step, setStep ]= useState(1);
  
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
    date: date.value,
    time: time.value,
    codicefiscale: codicefiscale.value,
    tipologiaRichiesta: tipologiaRichiesta.value,
    ufficio: ufficio.value,
    phone: phone.value,
  }

  const handleEvent = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/api/calendar/create/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'testing the data'); 
      });
  };

  return ( 
    <div className={`${classes.formContainer}`}>
      <form className="mb-3 row p-5 bg-gray d-md-flex align-items-center mt-5 col-md-5" onSubmit={handleEvent}>
        <h2 className="mb-3">Prenota un appuntamento</h2>
        { 
          step === 1 && <Ufficio ufficio={ufficio}/>
        }

        { 
          step === 2 && <Orari date={date} time={time}/>
        }

        { 
          step === 3 && <DettagliAppuntamento 
                          description={description} 
                          tipologiaRichiesta={tipologiaRichiesta} 
                        />
        }

        { 
          step === 4 && <Richiedente 
                          first_name={first_name} 
                          last_name={last_name}
                          email={email}
                          codicefiscale={codicefiscale}
                          phone={phone}
                        />
        }

        {
          step === 5 && <Riepilogo config={config}/>
        }

      </form>
        <StepsComponents 
              handlePrevStep={handlePrevStep}
              handleNextStep={handleNextStep}
              handleEvent={handleEvent}
              step={step}
        />
    </div>  
   );
}
 
export default FormEvents;