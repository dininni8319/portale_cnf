import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const StepsComponents = ({ 
  handlePrevStep,
  handleNextStep,
  handleSubmit,
  step,
  formErrors,
}) => {
 
  return ( 
     <div className='d-flex justify-content-between py-3 col-md-5 '>
      {step !== 1 && <button className="text-green-dark fs-5 fw-bold" onClick={handlePrevStep}>
          <FontAwesomeIcon icon={faAngleLeft} size="1x" className="pe-1 text-green-dark"/>
          Indietro
      </button>}
       {step === 5 && <button disabled={`${step === 5 ?  '' : 'disabled'}`} className='btn btn-outline-success' onClick={handleSubmit}>Salva Richiesta</button>}
      {step !== 5 && <button type='button' className="btn-color-green text-white fw-bold" onClick={handleNextStep}>
          Avanti
          <FontAwesomeIcon icon={faAngleRight} size="1x" className="ps-1 text-white"/> 
       </button>}
     </div>
  );
}
 
export default StepsComponents;