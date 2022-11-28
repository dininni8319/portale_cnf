import { useContext, memo } from "react";
import { AuthContext } from "../../../Contexts/Auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import classes from './style.module.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return ( 
      <header className={`${classes['it-header-height']}${classes['it-header-wrapper']}`} data-bs-target="#header-nav-wrapper">
          <div className={classes['it-header-slim-wrapper']}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className={classes['it-header-slim-wrapper-content']}>
                      <Link className="d-lg-block navbar-brand text-white nav-link text-sm-small" aria-current="page" to="/">
                        Nome della Regione
                      </Link>
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
                      {user && <a className={`bg-white ${classes['it-aria-personale-btn']} d-md-flex`} href="#" data-element="personal-area-login">
                          <span className="rounded-icon position-relative" aria-hidden="true">
                            <FontAwesomeIcon icon={faUser} size="1x" className={`${classes.iconUser}`} />
                          </span>
                        </a>}
                     {user === null && <Link className="nav-link active" aria-current="page" to="/sign">
                        <span className="d-none d-lg-block px-sm-1 px-md-3 text-white fs-5 fw-bolder">Accedi all'area personale</span>
                      </Link>}
                        
                    </div>
                    
                     {user && (
                        <span className="nav-label-style text-white text-capitalize fw-bold fs-5 d-none d-md-block">ciao {user?.username}</span>
                     )}
                     {user && (
                        <FontAwesomeIcon
                          onClick={logout}
                          icon={faArrowRightFromBracket}
                          className={`fa-1x mx-1 text-white logout-icon-style`}
                        /> 
                     )}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </header>
   );
}
 
export default memo(Header);