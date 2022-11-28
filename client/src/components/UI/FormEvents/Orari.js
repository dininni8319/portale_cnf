import { getCurrentDate, excludeWeekends } from "../../../utilities";
import { memo, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../../utilities";

const Orari = ({ date, setDate, isClicked, setIsClicked }) => {

  const [dates, setDates] = useState([]);
  const [size, setSize] = useState(0);
  const [message, setMessage] = useState('');
  
  const handleNextPage = (e) => {
    e.preventDefault()
    setSize(prev => prev + 5)
  };

  const handlePrevPage = (e) => {
    e.preventDefault()
    setSize(prev => size === 0 ? 0 : prev - 5);
  };


  const handleMeeting = (event) => {
      event.preventDefault()
      fetch(`http://localhost:8000/api/calendar/all/meetings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start_point: size
        }),
      })
        .then((response) => response.json())
        .then((data) => {
         
          if (data.paginate) {
             setDates(prev => prev = [...data.paginate]);
          }
          
          setMessage('Nessun meeting trovato');
        });
  }
  const minDate = getCurrentDate();

  return ( 
    <section>
        <h4 className='h4'>Orari</h4>
        <div className="mb-3 component-wrapper">
          <label htmlFor="inputDate" className="col-sm-2 col-form-label">Dates*</label>

          {
            dates?.map((date) => {
              return (
              <ul key={date.id}>
                <li className='d-md-flex fs-6 fw-bold justify-content-center'>
                  <input type='checkbox'  className='mx-2 checkbox-round' value={date} onClick={() => {
                      setIsClicked(prev => !prev)
                      setDate({...date})
                    }}/>
                  <span className='mx-2'>
                    Giorno: {formatDate(date.giorno_appuntamento)}
                  </span>
                
                  <span className='mx-2'>Ore: {date.start}</span> 
                </li>
              </ul>
              )
            })
          }

          {!dates && <span className='text-medium'>{message}</span>}
        </div>
        <div className='d-md-flex justify-content-between'>
          <button className='text-capitalize fs-5' onClick={(event) => {
              handlePrevPage(event)
              handleMeeting(event)
          }}>
          <FontAwesomeIcon icon={faAngleLeft} size="2xs" className="pe-1 text-gray"/>
           Precedente
          </button>
          <button className='text-capitalize fs-5' onClick={(event) => {
             handleNextPage(event)
             handleMeeting(event)
          }}>
            Prossimo
            <FontAwesomeIcon icon={faAngleRight} size="2xs" className="ps-1 text-gray"/> 
          </button>
        </div>
    </section>
   );
}
 
export default memo(Orari);