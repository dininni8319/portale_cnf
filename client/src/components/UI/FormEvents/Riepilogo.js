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
   console.log('====================================');
   console.log(email, phone, ufficio, 'testing the form multistep');
   console.log('====================================');
  return ( 
    <section>
          <div className="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end completed">
              <div className="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span className="d-block h-100 title-medium text-uppercase">Luogo: {ufficio}</span>
              </div>
          </div>
           
          <div className="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end completed">
            <div className="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
              <span className="d-block h-100 title-medium text-uppercase">Data e orario: {date} - {time}</span>
            </div>
          </div>

            <div className="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end completed">
              <div className="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span className="d-block h-100 title-medium text-uppercase">Dettagli appuntamento</span>
                <ul>
                  <li>Motivo: {tipologiaRichiesta}</li>
                  <li>Dettaglio: {description}</li>
                </ul>
              </div>
            </div>
            
            <div className="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end completed">
              <div className="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span className="d-block h-100 title-medium text-uppercase">Richiedente</span>
                <ul>
                  <li>Email: {email}</li>
                  <li>Nome: {first_name}</li>
                  <li>Cognome: {last_name}</li>
                  <li>Telefono: {phone}</li>
                  <li>Cod/Fiscale: {codicefiscale}</li>
                </ul>
              </div>
            </div>
      
            <div className="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end step-active">
              <div className="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span className="d-block h-100 title-medium text-uppercase">Riepilogo</span>
              </div>
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