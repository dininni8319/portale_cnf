import { 
  DettagliAppuntamento, 
  Orari, 
  Richiedente, 
  Riepilogo, 
  StepsComponent, 
  Ufficio 
} from "./link-form-comp";

const FormComponents = ({
  ufficio,
  date,
  setDate,
  isClicked,
  setIsClicked,
  description,
  tipologiaRichiesta,
  first_name,
  last_name,
  email,
  codicefiscale,
  phone,
  config,
  errorsForm,
  step,
  errors,
}) => {

  return ( 
    <div>
      {/* { Object.keys(formErrors).length === 0 && isSubmited && <span className="text-white bg-green-custom fs-5 fw-bold px-5 py-2">La tua richiesta è stata inviata correttamente</span> } */}
      <h2 className="mb-3 h2 mt-2">Prenota un appuntamento</h2>
        {step === 1 && (<Ufficio ufficio={ufficio} />)}

        {step === 2 && (<Orari 
            date={date} 
            setDate={setDate} 
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />)
        }

        {step === 3 && (<DettagliAppuntamento 
                          description={description} 
                          tipologiaRichiesta={tipologiaRichiesta}  
                        />)
        }

        {step === 4 && (<Richiedente 
                          first_name={first_name} 
                          last_name={last_name}
                          email={email}
                          codicefiscale={codicefiscale}
                          phone={phone}
                        />)
        }

        {step === 5 && <Riepilogo config={config}/>}
        
         <div className='mt-2 d-flex flex-column'>
            {Object.keys(errorsForm).length > 0 && Object.values(errorsForm.payload)?.map((err, id) => {
            return <span key={id} className='text-danger fs-6'>{err}</span>
          })}
        </div>
    
    </div>
   );
}
 
export default FormComponents;