import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { memo } from "react";

const Card = ( { children }) => {
  return (
    <div className="card col-11 col-md-5 mt-2 p-0">
      <div className="card-header footer-color-custom text-white fw-bold">
        Appuntamenti
      </div>
     { children}
  </div>
  );
}

export default memo(Card);
