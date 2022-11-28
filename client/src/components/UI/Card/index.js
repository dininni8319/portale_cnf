import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { memo } from "react";

const Card = ( { children }) => {
  return (
    <div className="card col-12 col-md-5 m-2 p-0">
      <div className="card-header bg-dark text-white fw-bold">
        Appuntamenti
      </div>
     { children}
  </div>
  );
}

export default memo(Card);

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