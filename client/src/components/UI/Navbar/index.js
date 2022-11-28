import classes from './style.module.css';
import { useContext, memo } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth";
import NavComponent from './NavComponent';
import NavIcons from './NavIcons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return ( 
    <div className={`navbar-color`}>
      <div className={classes["it-header-center-wrapper"]}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={classes["it-header-center-content-wrapper"]}>
                <div className="it-brand-wrapper">
                 
                    <div className={classes["it-brand-text"]}>
                      <Link className="nav-link active" aria-current="page" to="/">
                        <h1 className={classes["it-brand-title"]}>Nome del Comune</h1>
                      </Link>
                    </div>
                
                </div>
                <div className={classes["it-right-zone"]}>
                   <NavIcons />
                </div>
                  <div className="it-search-wrapper">
                    <span className="d-none">Cerca</span>
                    <button className={`search-link rounded-icon ${classes['search-botton-navbar']}`} type="button" data-bs-toggle="modal" data-bs-target="#search-modal" aria-label="Cerca nel sito">
                      <FontAwesomeIcon icon={faSearch} size="2x" className={classes['icon-search']}/>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavComponent />
    </div>
  );
}
 
export default memo(Navbar);