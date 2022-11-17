const StepsComponents = ({ 
  handlePrevStep,
  handleNextStep,
  handleEvent,
  step,
}) => {
  return ( 
  <section>
     <div>
       <button onClick={handlePrevStep}>Indietro</button>
       <button className={`${step !== 5 ? 'disabled' : ''}`} onClick={handleEvent}>Salva Richiesta</button>
       <button onClick={handleNextStep}>Avanti</button>
     </div>
  </section> 
  );
}
 
export default StepsComponents;