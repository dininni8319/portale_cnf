import classes from './style.module.css';

const Navbar = () => {
  return ( 
    <div className={classes["it-nav-wrapper"]}>
    <div className={classes["it-header-center-wrapper"]}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={classes["it-header-center-content-wrapper"]}>
              <div className="it-brand-wrapper">
                <a href="#" title="Vai alla homepage">
                  <svg className="icon" aria-hidden="true">
                    {/* <use href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-pa"></use> */}
                  </svg>
                  <div className={classes["it-brand-text"]}>
                    <div className="it-brand-title">Nome del Comune</div>
                  </div>
                </a>
              </div>
              <div className={classes["it-right-zone"]}>
                <div className={`${classes['it-socials']} d-none d-lg-flex`}>
                  <span>Seguici su</span>
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="icon icon-sm icon-white align-top">
                          {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-twitter"></use> */} 
                        </svg>
                        <span className="visually-hidden">Twitter</span></a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="icon icon-sm icon-white align-top">
                          {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-facebook"></use> */}
                        </svg>
                        <span className="visually-hidden">Facebook</span></a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="icon icon-sm icon-white align-top">
                          {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-youtube"></use> */} 
                        </svg>
                        <span className="visually-hidden">YouTube</span></a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="icon icon-sm icon-white align-top">
                          {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-telegram"></use> */} 
                        </svg>
                        <span className="visually-hidden">Telegram</span></a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="icon icon-sm icon-white align-top">
                          {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-whatsapp"></use> */} 
                        </svg>
                        <span className="visually-hidden">Whatsapp</span></a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="icon icon-sm icon-white align-top">
                          {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-rss"></use> */} 
                        </svg>
                        <span className="visually-hidden">RSS</span></a>
                    </li>
                  </ul>
                </div>
                <div className="it-search-wrapper">
                  <span className="d-none d-md-block">Cerca</span>
                  <button className="search-link rounded-icon" type="button" data-bs-toggle="modal" data-bs-target="#search-modal" aria-label="Cerca nel sito">
                    <svg className="icon">
                      {/* {/* <use href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-search"></use> */} 
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes["it-header-navbar-wrapper"]} id="header-nav-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">

              <nav className="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
                <button className="custom-navbar-toggler" type="button" aria-controls="nav4" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-target="#nav4" data-bs-toggle="navbarcollapsible">
                <svg className="icon">
                  {/* {/* <use href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-burger"></use> */} 
                </svg>
              </button>
              <div className="navbar-collapsable" id="nav4">
                <div className="overlay" style={{'display': 'none'}}></div>
                <div className="close-div">
                  <button className="btn close-menu" type="button">
                    <span className="visually-hidden">Nascondi la navigazione</span>
                    <svg className="icon">
                       <use href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-close-big"></use>  
                      </svg>
                  </button>
                </div>
                <div className="menu-wrapper">
                  <a href="#" aria-label="home Nome del Comune" className="logo-hamburger">
                    <svg className="icon" aria-hidden="true">
                      {/* {/* <use href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-pa"></use> */} 
                    </svg>
                    <div className={classes["it-brand-text"]}>
                      <div className={classes["it-brand-title"]}>Nome del Comune</div>
                    </div>
                  </a>
                  <ul className="navbar-nav" data-element="main-navigation">
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
                      <a className="nav-link active" href="#" data-element="all-services">
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
                  <div className={classes["it-socials"]}>
                    <span>Seguici su</span>
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <svg className="icon icon-sm icon-white align-top">
                            {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-twitter"></use> */} 
                          </svg>
                          <span className="visually-hidden">Twitter</span></a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <svg className="icon icon-sm icon-white align-top">
                            {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-facebook"></use> */} 
                          </svg>
                          <span className="visually-hidden">Facebook</span></a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <svg className="icon icon-sm icon-white align-top">
                            {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-youtube"></use> */}
                          </svg>
                          <span className="visually-hidden">YouTube</span></a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <svg className="icon icon-sm icon-white align-top">
                            {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-telegram"></use> */}
                          </svg>
                          <span className="visually-hidden">Telegram</span></a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <svg className="icon icon-sm icon-white align-top">
                            {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-whatsapp"></use> */} 
                          </svg>
                          <span className="visually-hidden">Whatsapp</span></a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <svg className="icon icon-sm icon-white align-top">
                            {/* {/* <use xlink:href="../assets/bootstrap-italia/dist/svg/sprites.svg#it-rss"></use> */}
                          </svg>
                          <span className="visually-hidden">RSS</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
   );
}
 
export default Navbar;