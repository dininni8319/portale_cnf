import classes from './style.module.css';
import { Link } from "react-router-dom";

const NavComponent = () => {
  return ( 
    <nav className={`navbar navbar-expand-lg ${classes['navbar-style-custom']}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-md-flex justify-content-md-evenly" id="navbarNavDropdown">
          <ul className="navbar-nav">
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
              <Link className="nav-link" to='/servizi_online'>
                <span>Servizi Online</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to='/sportello_online'>
                <span>Sportello Online</span>
              </Link>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#" data-element="live">
                <span>Vivere il Comune</span>
              </a>
            </li> */}
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
   );
}
 
export default NavComponent;