import { formatDate } from "../../../utilities";

const CardDetails = ({ children, meeting }) => {
  return ( 
    <ul>
      <li className="li-card-style">Codice riservazione: {meeting.id}</li>
      <li className="li-card-style"><span className="text-capitalize">Nome e cognome:</span>{meeting.first_name} {meeting.last_name}</li>
      <li className="li-card-style"><span>Email:</span> {meeting.email}</li>
      <li className="li-card-style"><span>Telefono:</span> {meeting.phone}</li>
      <li className="li-card-style"><span>Tipologia di richiesta: </span>{meeting.tipologia_richiesta}</li>
      <li className="li-card-style"><span>Descrizione:</span> {meeting.description}</li>
      <li className="li-card-style"><span>Data inizio meeting:</span> {formatDate(meeting.start)}</li>
      <li className="li-card-style"><span>Data fine meeting:</span> {formatDate(meeting.end)}</li>
      <li className="li-card-style">
        <span>Stato del appuntamento: </span>
        <span className='text-capitalize'>{meeting.stato ? 'prenotato' : 'libero'}</span>
      </li>
      {children}
    </ul>
   );
}
 
export default CardDetails;