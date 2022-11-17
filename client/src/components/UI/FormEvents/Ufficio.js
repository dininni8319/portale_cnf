const Ufficio = ({ ufficio }) => {
  return ( 
    <section className="mb-3">
        <h3>Ufficio</h3>
        <select className="form-select col-sm-10" aria-label="Default select example">
          <option selected>Scegli un Ufficio</option>
          <option value="Bari">Bari</option>
          <option value="Napoli">Napoli</option>
          <option value="Roma">Roma</option>
          <option value="Milano">Milano</option>
        </select>
    </section>
   );
}
 
export default Ufficio;