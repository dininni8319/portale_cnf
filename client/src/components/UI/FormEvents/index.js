
const FormEvents = () => {
  return ( 
    <>
      <form className="mb-3 row">
           <div>
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email"  className="form-control-plaintext" id="staticEmail" value="email@example.com" />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10">
              <textarea name="" id="" cols="30" rows="10">Description</textarea>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputDate" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" id="inputDate" />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputDate" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-10">
              <input type="time" className="form-control" id="inputDate" />
            </div>
          </div>
      </form>
    </>  
   );
}
 
export default FormEvents;