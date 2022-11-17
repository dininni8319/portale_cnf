const Riepilogo = ({ config }) => {
  const { 
    email,
    first_name,
    last_name,
    description,
    date,
    time,
    codicefiscale,
    tipologiaRichiesta,
    ufficio,
    phone
   } = config;

  return ( 
    <section className='component-wrapper'>
        
          <div className="info-progress-body d-flex justify-content-between align-items-end py-3 col-12 px-2">
            <span className="title-medium text-uppercase fw-bold">Luogo:</span>
            <span className="">{ufficio}</span>
          </div>
        
          <div className="info-progress-body d-flex justify-content-between align-items-end py-3 col-12 px-2">
            <span className="title-medium text-uppercase fw-bold">Data e orario:</span>
            <span className="">{date}  {time}</span>
          </div>


          <div className="info-progress-body d-flex flex-column py-3 col-12 px-2">
            <span className="title-medium text-uppercase fw-bold">Dettagli appuntamento</span>
            <ul>
              <li><span className="title-medium text-capitalize fw-bold">Motivo: </span>{tipologiaRichiesta}</li>
              <li><span className="title-medium text-capitalize fw-bold">Dettaglio: </span>{description}</li>
            </ul>
          </div>

          <div className="info-progress-body d-flex flex-column py-3 col-12 px-2">
            <span className="d-block h-100 title-medium text-uppercase">Richiedente</span>
            <ul>
              <li>Email: {email}</li>
              <li>Nome: {first_name}</li>
              <li>Cognome: {last_name}</li>
              <li>Telefono: {phone}</li>
              <li>Cod/Fiscale: {codicefiscale}</li>
            </ul>
             
          </div>
          
          <div className="iscrizioni-header d-lg-none w-100">
            <h4 className="step-title d-flex align-items-center justify-content-between drop-shadow">
              <span className="d-block d-lg-inline">
                Verifica dei dati
              </span>
              <span className="step">5/5</span>
            </h4>
          </div>
    
    </section>
   );
}
 
export default Riepilogo;