import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utilities";

const Card = ( { meeting, id }) => {
  return (
    <div className="card col-12 col-md-5 m-2 p-0">
      <div className="card-header bg-dark text-white fw-bold">
        Appuntamenti
      </div>
      <ul>
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
}

export default Card;

{/* <div className={classes["card-game"]}>
<img src={props.image} alt="test" />
<p>{props.name}</p>
  <Link to={`/`} className="d-flex">
  <FontAwesomeIcon
    icon={faChevronCircleRight}
    className="fa-2x text-white text-decoration-none"
  />
</Link>
<div></div>
<div></div>
</div> */}