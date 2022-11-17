const Richiedente = ( { email, first_name,last_name, phone }) => {
  return ( 
    <section>
        <h3>Richiedente</h3>
         <div>
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input 
                type="email"  
                className="form-control" 
                id="staticEmail" 
                {...email}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" {...first_name}/>
            </div>
          </div>
          <div className="mb-3">
            <label for="inputName" className="col-sm-2 col-form-label">Cognome</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" {...last_name}/>
            </div>
          </div>
          <div className="mb-3">
            <label for="inputName" className="col-sm-2 col-form-label">Telefono</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" {...phone}/>
            </div>
          </div>
    </section>
   );
}
 
export default Richiedente;