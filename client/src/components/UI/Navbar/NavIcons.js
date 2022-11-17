import classes from './style.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF, 
  faWhatsapp, 
  faYoutube, 
  faTwitter, 
  faTelegram 
} from "@fortawesome/free-brands-svg-icons"

const NavIcons = () => {
  return ( 
    <div className={`${classes['it-socials']} d-none d-md-flex`}>
    <span className='nav-link'>Seguici su</span>
    <ul className="d-md-flex justify-content-md-around nav-ul-width">
      <li>
        <a href="#" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white"/> 
          <span className="visually-hidden">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-white"/>
          <span className="visually-hidden">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white"/> 
          <span className="visually-hidden">YouTube</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
        <FontAwesomeIcon icon={faTelegram} size="2x" className="text-white"/>  
          <span className="visually-hidden">Telegram</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white"/> 
          <span className="visually-hidden">Whatsapp</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faWifi} className="text-white" size="2x" />
          <span className="visually-hidden">RSS</span>
        </a>
      </li>
    </ul>
  </div>
   );
}
 
export default NavIcons;