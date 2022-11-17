const StepsComponents = ({ 
  handlePrevStep,
  handleNextStep,
  handleEvent,
  step,
}) => {
  return ( 
     <div className='d-flex justify-content-between py-3 col-md-5 '>
       <button className="text-green-dark fs-5 fw-bold" onClick={handlePrevStep}>Indietro</button>
       { step === 5 && <button disabled={`${step === 5 ? '' : 'disabled'}`} className='btn btn-outline-success' onClick={handleEvent}>Salva Richiesta</button>}
       <button type='button' className="btn-color-green text-white fw-bold" onClick={handleNextStep}>Avanti</button>
     </div>
  );
}
 
export default StepsComponents;