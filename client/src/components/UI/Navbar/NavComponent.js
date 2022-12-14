import classes from './style.module.css';

const NavComponent = () => {
  return ( 
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
   );
}
 
export default NavComponent;