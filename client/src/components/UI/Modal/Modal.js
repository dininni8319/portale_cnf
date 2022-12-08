import classes from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal}></div>;
};

const Overlay = (props) => {

  return (
    <div className={classes.modal}>
      <div className="text-center">
        <FontAwesomeIcon icon={faSpinner} className="fa-1x text-main mx-1 text-success" />
        <h2 className="fx-bold h2"> {props.title}</h2>
      </div>
      <p>{props.message}</p>
      <div className="mt-5 d-flex justify-content-between">
        <button
          className="btn btn-outline-success rounded-0 px-3 fw-bold"
          onClick={props.closeModal}
        >
          {props.declineMessage}
        </button>

        <button
          className="btn btn-outline-danger rounded-0 px-3 fw-bold"
          onClick={() => props.action(props.id)}
        >
          {props.confirmMessage}
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById("backdrop")
      )}
      {createPortal(<Overlay {...props} />, document.getElementById("overlay"))}
    </>
  );
};

export default Modal;

// export default function Modal() {
//     return <div className= 'bg-white'>Hello World</div>
// }
