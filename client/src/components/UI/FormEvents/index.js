import { useState, useContext, memo } from "react";
import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../../store/form-slice';
import { FormComponents, StepsComponent } from "./link-form-comp";
import classes from './style.module.css';
import { validateForm } from '../../../utilities';
import { ConfigContext } from "../../../Contexts/Config";
import { Loader1 } from '../index';

const FormEvents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { api_urls: { backend } } = useContext(ConfigContext);
  const {step, errors, message, isSubmited } = useSelector(state => state.form);

  const email = useInput("");
  const first_name = useInput("");
  const last_name = useInput("");
  const codicefiscale = useInput("");
  const tipologiaRichiesta = useInput("");
  const ufficio = useInput("");
  const description = useInput("");
  const phone = useInput("");
  const [ date, setDate ] = useState({});
  const [ isClicked, setIsClicked ] = useState(false)
  const err = Object.keys(errors).length > 0 && Object.values(errors);
  
  const handlePrevStep = (e) => {
    e.preventDefault();
    dispatch(formActions.previusFormStep())
  };
  
  const handleNextStep = (e) => {
    e.preventDefault();
    dispatch(formActions.nextFormStep())
  };

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
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(formActions.checkForErrors(validateForm(config)));
    dispatch(formActions.setIsSubmited({ payload: true}));

    if (Object.keys(validateForm(config)).length === 0) {
      // console.log('testing if is working the submit form');
      fetch(`${backend}/calendar/create/event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      })
        .then((response) => response.json())
        .then((data) => {
          
          if (data.success === true) {
            dispatch(formActions.setIsSubmited({
              payload: true 
            }))

            dispatch(formActions.setMessage({
              payload: data.message
            }))

            setTimeout(() => {
              dispatch(formActions.setMessage({
                payload: ''
              }))

              dispatch(formActions.resetSteps())

              navigate('/');

              dispatch(formActions.setIsSubmited({
                payload: false,
              }))
            }, 3000)
          } else {
            dispatch(formActions.setIsSubmited({
              payload: false,
            }))

            dispatch(formActions.setMessage({
              payload: data.message
            }))
          }
        });
    } 
  };

  return ( 
    <div className={`${classes.formContainer}`}>
      <form className="mb-3 row p-2 p-md-5 bg-gray d-md-flex align-items-center mt-5 col-11 col-md-5" onSubmit={handleSubmit}>
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
          errorsForm={errors}
          step={step}
          errors={err}
        />

      </form>
       {isSubmited.payload && <div className={`${message.payload ? 'text-success': ''} fs-5 fw-bold`}>{!message.payload && !err ? <Loader1 /> : message.payload}</div>}
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