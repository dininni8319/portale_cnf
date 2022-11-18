const Ufficio = ({ ufficio }) => {
  return ( 
    <section className="mb-3" required>
        <h4>Ufficio*</h4>
        <select className="form-select col-sm-10" aria-label="Default select example" {...ufficio}>
          <option defaultValue>Scegli un Ufficio</option>
          <option value="Bari">Bari</option>
          <option value="Napoli">Napoli</option>
          <option value="Roma">Roma</option>
          <option value="Milano">Milano</option>
        </select>
    </section>
   );
}
 
export default Ufficio;