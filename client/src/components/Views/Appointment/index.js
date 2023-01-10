import { FormEvents } from "../../UI";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Appointment = () => {
  const location = useLocation();
  
  const handleScroll = () => {
    const element = document.getElementById('section-form');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  };

  useEffect(() => {
    handleScroll();
  }, [location]);

  return ( 
    <div className="custom-height-class mb-5" id='section-form'>
      <FormEvents />
    </div>
   );
}
 
export default Appointment;