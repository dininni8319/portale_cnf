const DettagliAppuntamento = ({ description, tipologiaRichiesta}) => {
  return ( 
    <section>
      <h3>Dettaglio Appuntamento</h3>
      <div className="mb-3">
        <label htmlFor="">Motivo</label>
        <select className="form-select col-sm-10" aria-label="Default select example">
          <option selected>Scegli un Ufficio</option>
          <option value="Bari">Bari</option>
          <option value="Napoli">Napoli</option>
          <option value="Roma">Roma</option>
          <option value="Milano">Milano</option>
        </select>
      </div>
      <div className="mb-3">
            <div className="col-sm-10">
              <textarea name="" id="" cols="30" rows="10" {...description}>Descrizione</textarea>
            </div>
      </div>
</section>
   );
}
 
export default DettagliAppuntamento;