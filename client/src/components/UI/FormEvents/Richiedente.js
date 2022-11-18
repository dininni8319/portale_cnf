const Richiedente = ( { email, first_name,last_name, phone, codicefiscale }) => {
  return ( 
    <section className="component-wrapper px-5">
        <h4>Richiedente</h4>
         <div>
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email*</label>
            <div className="col-sm-10">
              <input 
                type="email"  
                className="input-custom-style" 
                id="staticEmail" 
                {...email} 
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name*</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style" 
                id="inputName" 
                {...first_name} 
                required
              />

            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Cognome*</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style" 
                id="inputLastName" {...last_name} 
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Codice Fiscale*</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style" 
                id="inputPhone" 
                {...codicefiscale}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Telefono</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style" 
                id="inputPhone" 
                {...phone}
              />
            </div>
          </div>
    </section>
   );
}
 
export default Richiedente;