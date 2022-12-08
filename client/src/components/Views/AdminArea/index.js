import { useState, useEffect, useContext, memo } from "react";
import { Card, Sidebar } from "../../UI/index";
import { ConfigContext } from './../../../Contexts/Config';
import { formatDate } from "../../../utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt,faAngleRight, faPen  } from "@fortawesome/free-solid-svg-icons";
import Modal from '../../UI/Modal/Modal';
import useInput from '../../Hooks/useInput';
import { useNavigate } from "react-router";
import ReactPaginate from 'react-paginate';

const AdminArea = () => {

  const { api_urls } = useContext(ConfigContext);
  const navigate = useNavigate();

  const [ selectedAppointments, setSelectedAppointments ] = useState('');
  const [ term, setTerm ] = useState('');
  const [ currentAppointments, setCurrentAppointments ] = useState([]);
  const [ currentDateAppointments, setCurrentDateAppointments ] = useState('');
  const [ count, setCount ] = useState(0);
  const [ showCalendar, setShowCalendar ] = useState(false);
  const [ show, setShow ] = useState(false);
  const [ idCard, setIdCard ] = useState(0);

  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const stato = useInput('');
  const note_lavorazione = useInput('');

  const itemsPerPage = 10; 
  const [ itemOffset, setItemOffset ] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = currentAppointments?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(currentAppointments.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % currentAppointments.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleCalendar = () => {
    setShowCalendar(prev => !prev);
    setCurrentAppointments([]);
    setCount(0);
  }

  const handleShow = (id) => {
    let unique = currentAppointments?.some(el => {
      if (id === el.id) { 
        return true
      }
    })

    if (unique) {  
      setShow(prev => !prev);
      setIdCard(id);
    }
  }

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
        // navigate('/adminarea');
      });
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
      setModal(false)
  }

  useEffect(() => {
    if (term.length >= 2) {
      fetch(`${api_urls.backend}/api/appuntamenti/search=${term}`)
        .then((response) => response.json())
        .then((data) => {
          if (data?.appointments) {
            setCurrentAppointments([...data?.appointments])
            setCount(Number(data?.count))
            setShowCalendar(false);
          }
        });
    } 
  }, [term]);

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
          setCurrentAppointments([...data?.appointments])
          setCount(Number(data?.count))
        }
        // setCurrentAppointments([])
        // setCount(0)
      });
  }, [currentDateAppointments]);

  return ( 
    <div className='d-md-flex py-5 custom-height-class'>
      <Sidebar 
        setCurrentDateAppointments={setCurrentDateAppointments}
        setSelectedAppointments={setSelectedAppointments}
        handleCalendar={handleCalendar}
        setTerm={setTerm}
      /> 
      <div className='row justify-content-around col-12 col-md-9'>
        {! showCalendar ? 
        <h2 className='text-dark text-capitalize text-center py-2 px-2 h2 fs-1'>Risultati: <span className='fs-4 fw-bold'>{count === 0 ? "Nessun Risultato" : count }</span></h2>
        : <h2 className='text-dark text-capitalize text-center py-2 px-2 h2 fs-1'>Calendario</h2>
        }
        
        <div className='d-flex justify-content-center align-items-end my-3'>
       { currentItems &&  <ReactPaginate
            nextLabel="next >"
            previousLabel="< previous"
            onPageChange={handlePageClick}
            breakLabel="..."
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            // pageRangeDisplayed={5}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
    }
        </div>

        {currentItems?.map((meeting, id) => {
          return (
            <>
              <Card meeting={meeting} id={id} key={meeting.id}>
                  {meeting.email && 
                    <ul>
                        <li className="li-card-style">Codice riservazione: {meeting.id}</li>
                        <li className="li-card-style"><span className="text-capitalize">Nome e cognome:</span>{meeting.first_name} {meeting.last_name}</li>
                        <li className="li-card-style"><span>Email:</span> {meeting.email}</li>
                        <li className="li-card-style"><span>Telefono:</span> {meeting.phone}</li>
                        <li className="li-card-style"><span>Tipologia di richiesta: </span>{meeting.tipologia_richiesta}</li>
                        <li className="li-card-style"><span>Descrizione:</span> {meeting.description}</li>
                        <li className="li-card-style"><span>Data inizio meeting:</span> {formatDate(meeting.start)}</li>
                        <li className="li-card-style"><span>Data fine meeting:</span> {formatDate(meeting.end)}</li>
                        <li className="li-card-style"><span>Stato del appuntamento: </span><span className='text-capitalize'>{meeting.stato ? 'prenotato' : 'libero'}</span></li>
                        {Number(meeting.stato) === 0 && 
                         <div className='d-flex justify-content-around'>
                            <button onClick={() => setModal(true)} className='bg-transparent'>
                              <FontAwesomeIcon icon={faTrashAlt} size="1x" className='text-danger px-2'/>
                            </button>
                            <button className='bg-transparent' onClick={() => handleShow(meeting.id)}>
                            <FontAwesomeIcon icon={faPen} size="1x" className='text-info px-2'/>
                            </button>
                         </div>
                        }

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

                  {modal && (
                      <Modal
                        closeModal={closeModal}
                        title="Appuntamento"
                        message="Sei sicuro che vuoi eliminare questo appuntamento, se decidi di continuare non potrai accedere più a questa risorsa"
                        confirmMessage="Elimina"
                        declineMessage="Annulla"
                        action={handleDelete}
                        id={meeting.id}
                      />
                  )}
              </Card>
            </>
          );
        })}

       {showCalendar &&  <iframe 
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