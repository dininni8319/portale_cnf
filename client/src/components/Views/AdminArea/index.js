import { useState, useEffect, useContext, memo } from "react";
import { Card, Sidebar } from "../../UI/index";
import { ConfigContext } from './../../../Contexts/Config';

const AdminArea = () => {
  const [ selectedAppointments, setSelectedAppointments ] = useState('');
  const [ currentAppointments, setCurrentAppointments ] = useState([]);
  const { api_urls } = useContext(ConfigContext);

  useEffect(() => {
    fetch(`${api_urls.backend}/api/calendar/${selectedAppointments}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.appointments) {
          setCurrentAppointments(prev => [...data?.appointments])
        }
      });
  }, [selectedAppointments])

  return ( 
    <div className='d-md-flex py-5'>
      <Sidebar 
        setSelectedAppointments={setSelectedAppointments}
      /> 
      <div className='row justify-content-around col-12 col-md-8'>
      {currentAppointments?.map((meeting, id) => {
          return (
            <Card meeting={meeting} id={id} key={meeting.id}/>
          );
      })}
    </div>
      {/* <iframe 
        src="https://calendar.google.com/calendar/embed?src=67cb10fc4ca65505e0149eb3b93e9fe1279f95ff12403a915c13a1c656381376%40group.calendar.google.com&ctz=Europe%2FZurich" 
        className="mt-5 pt-5" 
        width="800" height="600" frameBorder="0" scrolling="no">
      </iframe>  */}
    </div>
   );
}
 
export default memo(AdminArea);