import { faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './style.module.css';

const Header = () => {
  return ( 
      <header className={`${classes['it-header-height']}${classes['it-header-wrapper']}`} data-bs-target="#header-nav-wrapper">
          <div className={classes['it-header-slim-wrapper']}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className={classes['it-header-slim-wrapper-content']}>
                    <a className="d-lg-block navbar-brand text-white nav-link" target="_blank" href="#" aria-label="Vai al portale {Nome della Regione} - link esterno - apertura nuova scheda" title="Vai al portale {Nome della Regione}">Nome della Regione</a>
                    <div className={classes["it-header-slim-right-zone"]} role="navigation">
                      <div className={`nav-item dropdown px-5`}>
                        <button type="button" className={`nav-link dropdown-toggle bg-transparent text-white fw-bold ${classes.btnSelect}`} data-bs-toggle="dropdown" aria-expanded="false" aria-controls="languages" aria-haspopup="true">
                          <span className="visually-hidden">Lingua attiva:</span>
                          <span>ITA</span>
                          
                        </button>
                        <div className="dropdown-menu">
                          <div className="row">
                            <div className="col-12">
                              <div className={classes["link-list-wrapper"]}>
                                <ul className={classes["link-list"]}>
                                  <li><a className="dropdown-item list-item" href="#"><span>ITA<span className="visually-hidden">selezionata</span></span></a></li>
                                  <li><a className="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        <a className={`bg-white ${classes['it-aria-personale-btn']} d-md-flex`} href="#" data-element="personal-area-login">
                          <span className="rounded-icon position-relative" aria-hidden="true">
                           <FontAwesomeIcon icon={faUser} size="1x" className={`${classes.iconUser}`} />
                          </span>
                        </a>
                        <span className="d-none d-lg-block px-3 text-white fs-5 fw-bolder">Accedi all'area personale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </header>
   );
}
 
export default Header;