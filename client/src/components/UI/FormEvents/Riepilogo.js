import { formatDate } from "../../../utilities";
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
    <section>
          <div className="py-3 col-12 px-2 component-wrapper mb-3 px-3">
            <h4 className='h4 input-custom-style py-3'>Ufficio</h4>
            <div className="d-flex justify-content-between align-items-end input-custom-style py-3">
              <span className="title-medium text-uppercase fw-bold">Luogo:</span>
              <span className="">{ufficio}</span>
            </div>
          </div>
        
          <div className="py-3 col-12 component-wrapper mb-3 px-3">
          <h4 className='h4 input-custom-style py-3'>Orari</h4>
            <div className="d-flex justify-content-between align-items-end input-custom-style py-3">
              <span className="title-medium text-uppercase fw-bold">Data e orario:</span>
              <span className="fw-bold">{time} {formatDate(date)}</span>
            </div>
          </div>

          <div className="info-progress-body d-flex flex-column py-3 col-12 px-3 component-wrapper mb-3">
            <h4 className='h4 input-custom-style py-3'>Dettaglio Appuntamento</h4>
            <ul className='ul py-3'>
              <li className="d-flex justify-content-between align-items-end input-custom-style py-3">
                <strong>Motivo: </strong>
                <span className="title-medium text-capitalize fw-bold py-3"></span>{tipologiaRichiesta}
              </li>
              <li className="d-flex justify-content-between align-items-end input-custom-style py-3">
                <strong>Dettaglio: </strong>
                <span className="title-medium text-capitalize fw-bold py-3"></span>{description}
              </li>
            </ul>
          </div>

          <div className="py-3 col-12 component-wrapper mb-3 px-3">
            <h4 className='h4 input-custom-style py-3'>Richiedente</h4>
            <ul className='ul-custom-style py-3'>
              <li className="d-flex justify-content-between align-items-end input-custom-style py-3">
                <strong>Email:</strong>
                <span>{email}</span>
              </li>

              <li className="d-flex justify-content-between align-items-end input-custom-style py-3">
                <strong>Nome: </strong>
                <span>{first_name}</span>
                </li>
              <li className="d-flex justify-content-between align-items-end input-custom-style py-3">
                <strong>Cognome: </strong>
                <span>{last_name}</span>
                </li>
              <li className="d-flex justify-content-between align-items-end input-custom-style py-3">
                <strong>Telefono: </strong>
                <span>{phone}</span>
              </li>
              <li className="d-flex justify-content-between align-items-end input-custom-style py-3">
                <strong>Cod/Fiscale: </strong>
                <span>{codicefiscale}</span>
              </li>
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