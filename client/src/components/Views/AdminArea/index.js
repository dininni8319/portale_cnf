import { useState, useEffect, useContext, memo } from "react";
import { Card, Sidebar } from "../../UI/index";
import { ConfigContext } from './../../../Contexts/Config';
import { formatDate } from "../../../utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const AdminArea = () => {
  const [ selectedAppointments, setSelectedAppointments ] = useState('');
  const [ currentAppointments, setCurrentAppointments ] = useState([]);
  const [ currentDateAppointments, setCurrentDateAppointments ] = useState('');
  const { api_urls } = useContext(ConfigContext);
  const [ count, setCount ] = useState(0);
  const [showCalendar, setShowCalendar ] = useState(false);
  const [ current, setCurrent ] = useState(10);

  const handleCalendar = () => {
    setShowCalendar(prev => !prev);
    setCurrentAppointments([]);
    setCount(0);
  }

  const handleNextPaginateMeetings = (meetings, curr, ) => {
   if (curr > 10) {
     return meetings.slice(0 + curr, curr + 10);
   }
    return curr;
  }

  const handlePrevMeetings = (meetings, curr, ) => {
    if (curr > 20) {
      return meetings.slice(10 - curr, curr - 10);
    }
     return curr;
   }
  const handleDelete = (id) => {
      fetch(`${api_urls.backend}/api/calendar/delete/meeting/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.status === 200) {

            let appointments = currentAppointments?.filter(appoitment => appoitment.id !== id);
            setCurrentAppointments(prev => [...appointments]);
          }
        })
  }

  useEffect(() => {
    fetch(`${api_urls.backend}/api/calendar/${selectedAppointments}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.appointments) {
          setCurrentAppointments(prev => [...data?.appointments])
          setCount(Number(data?.count))
          setShowCalendar(false);
        }
      });
  }, [selectedAppointments])

  useEffect(() => {
    fetch(`${api_urls.backend}/api/calendar/date/`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: currentDateAppointments }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.appointments) {
          setCurrentAppointments(prev => [...data?.appointments])
          setCount(Number(data?.count))
        }
      });
  }, [currentDateAppointments]);

  return ( 
    <div className='d-md-flex py-5'>
      <Sidebar 
        setCurrentDateAppointments={setCurrentDateAppointments}
        setSelectedAppointments={setSelectedAppointments}
        handleCalendar={handleCalendar}
      /> 
      <div className='row justify-content-around col-12 col-md-9'>
        {! showCalendar ? 
        <h2 className='text-dark text-capitalize text-center py-2 px-2 h2 fs-1'>Risultati: <span className='fs-4 fw-bold'>{count === 0? "Nessun Risultato" : count }</span></h2>
        : <h2 className='text-dark text-capitalize text-center py-2 px-2 h2 fs-1'>Calendario</h2>
        }
          {!showCalendar && <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true" onClick={() => setCurrent(prev => prev > 10 ?  prev - 10 : prev)}>Previous</a>
            </li>
            <li>
              <a class="page-link" href="#" onClick={() => setCurrent(prev => prev + 10 )}>Next</a>
            </li>
          </ul>
        </nav>}
        
        {currentAppointments?.map((meeting, id) => {
          return (
             <Card meeting={meeting} id={id} key={meeting.id}>
              {meeting.email && 
                <ul>
                    <li className="li-card-style">{id + 1}</li>
                    <li className="li-card-style"><span className="text-capitalize">Nome e cognome:</span>{meeting.first_name} {meeting.last_name}</li>
                    <li className="li-card-style"><span>Email:</span> {meeting.email}</li>
                    <li className="li-card-style"><span>Telefono:</span> {meeting.phone}</li>
                    <li className="li-card-style"><span>Tipologia di richiesta: </span>{meeting.tipologia_richiesta}</li>
                    <li className="li-card-style"><span>Descrizione:</span> {meeting.description}</li>
                    <li className="li-card-style"><span>Data inizio meeting:</span> {formatDate(meeting.start)}</li>
                    <li className="li-card-style"><span>Data fine meeting:</span> {formatDate(meeting.end)}</li>
                    <li className="li-card-style"><span>Stato del appuntamento: </span><span>{meeting.stato ? meeting.stato : ''}</span></li>
                    <button onClick={() => handleDelete(meeting.id)}>
                     <FontAwesomeIcon icon={faTrashAlt} size="1x" className='text-danger px-2'/>
                    </button>
                </ul>
              }
              {meeting.giorno_appuntamento && 
                <ul>
                    <li className="li-card-style">{id + 1}</li>
                    <li className="li-card-style"><span>Giorno del appuntamento:</span> {formatDate(meeting.giorno_appuntamento)}</li>
                    <li className="li-card-style"><span>Orario del meeting:</span><span>{meeting.start}</span></li>
                    <li className="li-card-style"><span>Orario del meeting:</span><span className={`${meeting.stato_prenotazione === 'libero' ? 'text-success' : 'text-danger'}`}>{meeting.stato_prenotazione}</span> </li>
                </ul>
              }
            </Card> 
          );
        })}
    
       { showCalendar &&  <iframe 
            src="https://calendar.google.com/calendar/embed?src=67cb10fc4ca65505e0149eb3b93e9fe1279f95ff12403a915c13a1c656381376%40group.calendar.google.com&ctz=Europe%2FZurich" 
            className="mt-5 pt-5" 
            width="800" height="600" frameBorder="0" scrolling="no">
          </iframe>  
        }
    </div>

  </div>
   );
}
 
export default memo(AdminArea);