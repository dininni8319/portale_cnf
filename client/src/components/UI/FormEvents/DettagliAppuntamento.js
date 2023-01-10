import { memo } from "react";

const DettagliAppuntamento = ({ description, tipologiaRichiesta }) => {
 
  return ( 
    <section>
      <h4 className='h4'>Dettaglio Appuntamento</h4>
      <div className="mb-3 col-sm-10">
        <label htmlFor="">Motivo*</label>
        <select className="form-select" aria-label="Default select example" {...tipologiaRichiesta} required>
          <option defaultValue>Scegli un Ufficio</option>
          <option value="tasse">Tasse</option>
          <option value="assistenza">Assistenza</option>
        </select>
      </div>
      <div className="mb-3">
          <div className="col-sm-10">
            <textarea name="" className='w-100 p-1' cols="30" rows="10" placeholder="Dettaglio dell' appuntamento" {...description}>*Descrizione</textarea>
          </div>
      </div>
    </section>
   );
}
 
export default memo(DettagliAppuntamento);