import classes from './style.module.css';
import NavComponent from './NavComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NavIcons from './NavIcons';

const Navbar = () => {
  return ( 
    <div className={`navbar-color`}>
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
                   <NavIcons />
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
      <NavComponent />
    </div>
  );
}
 
export default Navbar;