import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import useInput from '../../Hooks/useInput';
import { useNavigate } from "react-router";
import { ConfigContext } from './../../../Contexts/Config';

const FormUpdateDetail = ( { meeting, show, idCard, setShow }) => {
  const navigate = useNavigate();
  const stato = useInput('');
  const note_lavorazione = useInput('');
  
  const { api_urls } = useContext(ConfigContext);
  const config = {
    stato: stato.value,
    note_lavorazione: note_lavorazione.value,
  }
  
  const handleSubmit = (event, id) => {
    event.preventDefault();
    fetch(`${api_urls.backend}/api/calendar/create/event/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    })
      .then((response) => response.json())
      .then((data) => {

        if (data.success === true) {
          setShow(prev => !prev);
          navigate('/adminarea');
        }
      });
  }

  return ( 
    <>
        {Number(meeting.stato) === 0 && show && idCard === meeting.id && <form  
          className={`${show && idCard === meeting.id ? 'z-index-class' : null}`} 
          onSubmit={(event) => handleSubmit(event, meeting.id)}>
          <div>
              <label htmlFor="staticEmail" className="col-form-label ms-2 mt-3">Stato*</label>
              <div className="col-sm-9 px-2">
                <input 
                  type="text"  
                  className="input-search" 
                  id="staticEmail" 
                  {...stato} 
                  required
                />
              </div>
          </div>
          <div>
              <label htmlFor="staticEmail" className="col-form-label ms-2">Note di Lavorazione</label>
              <div className="col-sm-9 px-2">
                <input 
                  type="text"  
                  className="input-search" 
                  id="staticEmail" 
                  {...note_lavorazione} 
                />
              </div>
          </div>
          <button type='submit' className="btn-color-green text-white fw-bold mt-3 ms-2">
              Invia
              <FontAwesomeIcon icon={faAngleRight} size="1x" className="ps-1 text-white"/> 
          </button>
        </form>}
     </>
   );
}
 
export default FormUpdateDetail;