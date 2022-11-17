import classes from './style.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWifi, faSearch} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF, 
  faWhatsapp, 
  faYoutube, 
  faTwitter, 
  faTelegram 
} from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  return ( 
    <div className={`${classes["it-nav-wrapper"]} navbar-color`}>
      <div className={classes["it-header-center-wrapper"]}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={classes["it-header-center-content-wrapper"]}>
                <div className="it-brand-wrapper">
                  <a href="#" title="Vai alla homepage" className="text-decoration-none">
                    <div className={classes["it-brand-text"]}>
                      <h1 className={classes["it-brand-title"]}>Nome del Comune</h1>
                    </div>
                  </a>
                </div>
                <div className={classes["it-right-zone"]}>
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
                </div>
                  <div className="it-search-wrapper">
                    <span className="d-none">Cerca</span>
                    <button className={`search-link rounded-icon ${classes['search-botton-navbar']}`} type="button" data-bs-toggle="modal" data-bs-target="#search-modal" aria-label="Cerca nel sito">
                      <FontAwesomeIcon icon={faSearch} size="1x" className={classes['icon-search']}/>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class={`navbar navbar-expand-lg ${classes['navbar-style-custom']}`}>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-md-flex justify-content-md-evenly" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" data-element="management">
                  <span>Amministrazione</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-element="news">
                  <span>Novità</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-element="all-services">
                  <span>Servizi</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-element="live">
                  <span>Vivere il Comune</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav navbar-secondary">
              <li className="nav-item">
                <a className="nav-link" href="#">Iscrizioni</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Estate in città</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Polizia locale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-element="all-topics">
                  <span className="fw-bold">Tutti gli argomenti...</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
   );
}
 
export default Navbar;