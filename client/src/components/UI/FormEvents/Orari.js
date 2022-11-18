import { getCurrentDate, excludeWeekends } from "../../../utilities";

const Orari = ({ date, time }) => {

  const minDate = getCurrentDate();

  return ( 
    <section>
        <h4 className='h4'>Orari</h4>
        <div className="mb-3">
          <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date*</label>
          <div className="col-sm-10">
            <input 
              type="date" 
              className="form-control" 
              id="inputDate"
              min={minDate} 
              {...date}
              required
            />
          
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDate" className="col-sm-2 col-form-label">Time*</label>
          <div className="col-sm-10">
            <input 
              type="time" 
              className="form-control" 
              id="inputDate" 
              {...time}
              required
            />
           
          </div>
        </div>
    </section>
   );
}
 
export default Orari;