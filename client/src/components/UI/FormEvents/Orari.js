const Orari = ({ date, time }) => {
  return ( 
    <section>
        <h3>Orari</h3>
        <div className="mb-3">
          <label for="inputDate" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="inputDate" {...date}/>
          </div>
        </div>
        <div className="mb-3">
          <label for="inputDate" className="col-sm-2 col-form-label">Time</label>
          <div className="col-sm-10">
            <input type="time" className="form-control" id="inputDate" {...time}/>
          </div>
        </div>
    </section>
   );
}
 
export default Orari;