import './style.css';

const Header = () => {
  return ( 
    <header className="it-header-wrapper" data-bs-target="#header-nav-wrapper">
            <div className="it-header-slim-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="it-header-slim-wrapper-content">
                      <a className="d-lg-block navbar-brand" target="_blank" href="#" aria-label="Vai al portale {Nome della Regione} - link esterno - apertura nuova scheda" title="Vai al portale {Nome della Regione}">Nome della Regione</a>
                      <div className="it-header-slim-right-zone" role="navigation">
                        <div className="nav-item dropdown">
                          <button type="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-controls="languages" aria-haspopup="true">
                            <span className="visually-hidden">Lingua attiva:</span>
                            <span>ITA</span>
                            <svg className="icon">
                              <use href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                            </svg>
                          </button>
                          <div className="dropdown-menu">
                            <div className="row">
                              <div className="col-12">
                                <div className="link-list-wrapper">
                                  <ul className="link-list">
                                    <li><a className="dropdown-item list-item" href="#"><span>ITA <span className="visually-hidden">selezionata</span></span></a></li>
                                    <li><a className="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          <a className="btn btn-primary btn-icon btn-full" href="#" data-element="personal-area-login">
                            <span className="rounded-icon" aria-hidden="true">
                              <svg className="icon icon-primary">
                                {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-user"></use> */}
                              </svg>
                            </span>
                            <span className="d-none d-lg-block">Accedi all'area personale</span>
                          </a>
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