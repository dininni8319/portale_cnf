import { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Sidebar, Modal, Paginate, FormUpdateDetail, Calendar, CardDetails } from "../../UI/index";
import { formatDate, perPage } from "../../../utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faPen  } from "@fortawesome/free-solid-svg-icons";
import { fetchAppoitmentData, fetchSearchedAppoitment,fetchByDate } from '../../../store/appointments/appointment-actions';
import { removeAppoitment } from "../../../store/appointments/appoitment-actions2";
import { appoitmentActions } from "../../../store/appointments/appointment-slice";

const AdminArea = () => {
  const dispatch = useDispatch();
  const { data: appointments, isCalendar, total: count} = useSelector(state => state.appoitment);
  const [ selectedAppointments, setSelectedAppointments ] = useState('');
  const [ term, setTerm ] = useState('');
  const [ currentDateAppointments, setCurrentDateAppointments ] = useState('');
  const [ show, setShow ] = useState(false);
  const [ idCard, setIdCard ] = useState(0);
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const [ itemOffset, setItemOffset ] = useState(0);
  const itemsPerPage = 10; 
  const { pageCount, currentItems } = perPage(itemOffset, itemsPerPage, appointments);
  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % appointments.length;
    setItemOffset(newOffset);
  };

  const handleCalendar = () => {
    dispatch(appoitmentActions.showCalendar());
    dispatch(appoitmentActions.removeItems());
  }

  const handleModal = (id) => {
    setIdCard(id);
    setModal(true);
  }

  const handleShow = (id) => {
    let unique = appointments?.some(el => {
      if (id === el.id) { 
        return true
      }
    })
    if (unique) {  
      setShow(prev => !prev);
      setIdCard(id);
    }
  }

  const handleDelete = (id) => {
    dispatch(removeAppoitment(id));
    setModal(false)
  }

  useEffect(() => {
    if (term.length >= 2) {
      dispatch(fetchSearchedAppoitment(term));
      dispatch(appoitmentActions.hideCalendar());
    } 
  }, [dispatch, term]);

  useEffect(() => {
    dispatch(fetchAppoitmentData(selectedAppointments));
    dispatch(appoitmentActions.hideCalendar());
  }, [dispatch, selectedAppointments]);

  useEffect(() => {
    dispatch(fetchByDate(currentDateAppointments));
    dispatch(appoitmentActions.hideCalendar());
  }, [dispatch, currentDateAppointments]);

  return ( 
    <div className='d-md-flex py-5 custom-height-class'>
      <Sidebar 
        setCurrentDateAppointments={setCurrentDateAppointments}
        setSelectedAppointments={setSelectedAppointments}
        handleCalendar={handleCalendar}
        setTerm={setTerm}
      /> 
      <div className='row justify-content-around col-12 col-md-9'>
        {!isCalendar ? <h2 className='text-dark text-capitalize text-center py-2 px-2 h2 fs-1'>Risultati: <span className='fs-4 fw-bold'>{count === 0 ? "Nessun Risultato" : count }</span></h2>
        : <h2 className='text-dark text-capitalize text-center py-2 px-2 h2 fs-1'>Calendario</h2>}
        <Paginate 
          currentItems={currentItems} 
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />

        {currentItems?.map((meeting, id) => {
          return (
            <>
              <Card meeting={meeting} id={id} key={meeting.id}>
                  {meeting.email && 
                      <CardDetails
                        meeting={meeting}
                      >
                        {Number(meeting.stato) === 0 && 
                         <div className='d-flex justify-content-around'>
                            <button onClick={() => handleModal(meeting.id)} className='bg-transparent'>
                              <FontAwesomeIcon icon={faTrashAlt} size="1x" className='text-danger px-2'/>
                            </button>
                            <button className='bg-transparent' onClick={() => handleShow(meeting.id)}>
                            <FontAwesomeIcon icon={faPen} size="1x" className='text-info px-2'/>
                            </button>
                         </div>
                        }
                        <FormUpdateDetail 
                          show={show}
                          meeting={meeting}
                          idCard={idCard}
                          setShow={setShow}
                        />
                      </CardDetails>
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
            </>
          );
        })}
       {isCalendar && <Calendar />}
        {modal && (
            <Modal
              closeModal={closeModal}
              title="Appuntamento"
              message="Sei sicuro che vuoi eliminare questo appuntamento, se decidi di continuare non potrai accedere più a questa risorsa"
              confirmMessage="Elimina"
              declineMessage="Annulla"
              action={handleDelete}
              id={idCard}
            />
        )}
    </div>
  </div>
  );
}
 
export default memo(AdminArea);