import { useState, useEffect, useContext, memo } from "react";
import { Card } from "../../UI/index";
import { ConfigContext } from './../../../Contexts/Config';

const AdminArea = () => {

  const [ currentAppointments, setCurrentAppointments ] = useState([])
  const { api_urls } = useContext(ConfigContext)
 console.log(currentAppointments);
  useEffect(() => {
    fetch(`${api_urls.backend}/api/calendar/all/current/appointments`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.appointments) {
          setCurrentAppointments(prev => [...data?.appointments])
        }
      });
  }, [])

  return ( 
    <div className='d-md-flex flex-column align-items-center py-5 mt-5'> 
      <div className='row justify-content-around col-12'>
      {currentAppointments?.map((meeting, id) => {
          return (
            <Card meeting={meeting} id={id} />
          );
      })}
    </div>
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=67cb10fc4ca65505e0149eb3b93e9fe1279f95ff12403a915c13a1c656381376%40group.calendar.google.com&ctz=Europe%2FZurich" 
        className="mt-5 pt-5" 
        width="800" height="600" frameBorder="0" scrolling="no">
      </iframe> 
    </div>
   );
}
 
export default memo(AdminArea);