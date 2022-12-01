import { useState, memo } from "react";
import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../../store/form-slice';
import { FormComponents, StepsComponent } from "./link-form-comp";
import classes from './style.module.css';
import { validateForm } from '../../../utilities';

const FormEvents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const step = useSelector(state => state.form.step);
  const errorsForm = useSelector(state => state.form.errors);

  const email = useInput("");
  const first_name = useInput("");
  const last_name = useInput("");
  const codicefiscale = useInput("");
  const tipologiaRichiesta = useInput("");
  const ufficio = useInput("");
  const description = useInput("");
  const phone = useInput("");
  const [ date, setDate ] = useState({});
  
  const [message, setMessage] = useState('');

  const [ isSubmited, setIsSubmited ] = useState(false);
  const [ isClicked, setIsClicked ] = useState(false)

  const errors = Object.keys(errorsForm).length > 0 && Object.values(errorsForm);
  
  const handlePrevStep = (e) => {
    e.preventDefault();
    dispatch(formActions.previusFormStep())
  }
  
  const handleNextStep = (e) => {
    e.preventDefault();
    dispatch(formActions.nextFormStep())
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
    
    dispatch(formActions.checkForErrors({payload: validateForm(config)}))
    
   
    if (Object.values(errorsForm).length === 0) {
      
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
          if (data.event.googleEvent.id) {
            setMessage(data.msg);
            navigate('/');
          }
          navigate('/');
        });
    } 
  };

  return ( 
    <div className={`${classes.formContainer}`}>
      <form className="mb-3 row p-5 bg-gray d-md-flex align-items-center mt-5 col-11 col-md-5" onSubmit={handleSubmit}>
        <FormComponents 
          ufficio={ufficio}
          date={date} 
          setDate={setDate} 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          description={description} 
          tipologiaRichiesta={tipologiaRichiesta}
          first_name={first_name} 
          last_name={last_name}
          email={email}
          codicefiscale={codicefiscale}
          phone={phone}
          config={config}
          errorsForm={errorsForm}
          step={step}
          errors={errors}
        />
   
      </form>
       {message && <div className="text-success fs-4 fw-bold">{message}</div>}
        <StepsComponent 
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
          step={step}
        />
    </div>  
   );
}
 
export default memo(FormEvents);