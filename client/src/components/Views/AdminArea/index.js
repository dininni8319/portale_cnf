import { useState, useEffect, useContext, memo } from "react";
import { Card } from "../../UI/index";
import { ConfigContext } from './../../../Contexts/Config';
import { formatDate } from "../../../utilities";
const AdminArea = () => {

  const [ currentAppointments, setCurrentAppointments ] = useState([])
  const { api_urls } = useContext(ConfigContext)
 console.log(currentAppointments);
  useEffect(() => {
    fetch(`${api_urls.backend}/api/calendar/all/current/appointments`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.appointments) {
          setCurrentAppointments(prev => [...data?.appointments])
        }
      });
  }, [])

  return ( 
    <div className='d-md-flex flex-column align-items-center py-5 mt-5'> 
      <div className='d-md-flex col-12 justify-content-around'>
          {currentAppointments?.map((meeting, id) => {
              return (
                  <div className="card col-12 col-md-3">
                    <div className="card-header bg-dark text-white fw-bold">
                      Appuntamenti
                    </div>
                    <ul key={meeting.id} className="p-2">
                        <li className="li-card-style">{id + 1}</li>
                        <li className="li-card-style"><span>Name:</span> {meeting.name}</li>
                        <li className="li-card-style"><span>Email:</span> {meeting.email}</li>
                        <li className="li-card-style"><span>Phone:</span> {meeting.phone}</li>
                        <li className="li-card-style"><span>Tipologia di richiesta: </span>{meeting.tipologia_richiesta}</li>
                        <li className="li-card-style"><span>Descrizione:</span> {meeting.description}</li>
                        <li className="li-card-style"><span>Data inizio meeting:</span> {formatDate(meeting.start)}</li>
                        <li className="li-card-style"><span>Data fine meeting:</span> {formatDate(meeting.end)}</li>
                        <li className="li-card-style"><span>Stato del appuntamento: </span><span>{meeting.stato ? meeting.stato : ''}</span></li>
                    </ul>
                  </div>
              );
          })}
      </div>
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=67cb10fc4ca65505e0149eb3b93e9fe1279f95ff12403a915c13a1c656381376%40group.calendar.google.com&ctz=Europe%2FZurich" 
        className="mt-5 pt-5" 
        width="800" height="600" frameBorder="0" scrolling="no">
      </iframe> 
    </div>
   );
}
 
export default memo(AdminArea);