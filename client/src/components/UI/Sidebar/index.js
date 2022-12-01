import { useState } from 'react';
import useInput from '../../Hooks/useInput';
import Search from '../Search';

const Sidebar = ( { setSelectedAppointments, setCurrentDateAppointments, handleCalendar, setTerm }) => {

  const handleAppointments = (event) => {
    setSelectedAppointments(event.target.value);
  };

  const handleDateAppointments = (event) => {
    setCurrentDateAppointments(event.target.value);
  };

  return ( 
    <div className="accordion col-11 col-md-3 mx-2 " id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             Cerca Appuntamenti
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
              <select 
               defaultValue={'Seleziona un tipo di appuntamneto'} 
               onChange={(event) => handleAppointments(event)}
               className='form-select'
              >
               <option value='all/reserved/meetings'>Appuntamenti riservati</option>
               <option value='all/active/meetings'>Appuntamenti liberi</option>
               <option value='all/old/meetings'>Appuntamenti scaduti</option>
               {/* <option value='completed/appointments'>Appuntamenti completati</option> */}
             </select>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Cerca con il calendario
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="accordion-body">
            <input 
              type='date'
              onChange={(event) => handleDateAppointments(event)}
            />
          </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Cerca con i dati dell'utente
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <Search title='appuntamento' setTerm={setTerm}/>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="fs-4 w-100 py-2 text-white fw-bold navbar-color" onClick={handleCalendar} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Mostra il Calendario
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
           
        </div>
      </div>
  </div> 
  );
}
 
export default Sidebar;