import classes from './style.module.css';
import { memo } from "react";

const Footer = () => {
  return ( 
    <>
      <footer className={`${classes['it-footer']} footer-color-custom py-3`} id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 footer-items-wrapper logo-wrapper">
              {/* <img className="ue-logo" src="../assets/images/logo-eu-inverted.svg" alt="logo Unione Europea"> */}
              <div className="it-brand-wrapper">
                <a href="#" className="text-decoration-none">
                  <div className={classes["it-brand-title"]}>
                    <h2 className="no_toc">Nome del Comune</h2>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 footer-items-wrapper">
              <h3 className="footer-heading-title">Amministrazione</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">Organi di governo</a>
                </li>
                <li>
                  <a href="#">Aree amministrative</a>
               </li>
                <li>
                  <a href="#">Uffici</a>
                </li>
                <li>
                  <a href="#">Enti e fondazioni</a>
                </li>
                <li>
                  <a href="#">Politici</a>
                </li>
                <li>
                  <a href="#">Personale amministrativo</a>
                </li>
                <li>
                  <a href="#">Documenti e dati</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 footer-items-wrapper">
              <h3 className="footer-heading-title">Categorie di servizio</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="footer-list">
                    <li>
                      <a href="#">Anagrafe e stato civile</a>
                    </li>
                    <li>
                      <a href="#">Cultura e tempo libero</a>
                    </li>
                    <li>
                      <a href="#">Vita lavorativa</a>
                    </li>
                    <li>
                      <a href="#">Imprese e commercio</a>
                    </li>
                    <li>
                      <a href="#">Appalti pubblici</a>
                    </li>
                    <li>
                      <a href="#">Catasto e urbanistica</a>
                    </li>
                    <li>
                      <a href="#">Turismo</a>
                    </li>
                    <li>
                      <a href="#">Mobilità e trasporti</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className="footer-list">
                    <li>
                      <a href="#">Educazione e formazione</a>
                    </li>
                    <li>
                      <a href="#">Giustizia e sicurezza pubblica</a>
                    </li>
                    <li>
                      <a href="#">Tributi, finanze e contravvenzioni</a>
                    </li>
                    <li>
                      <a href="#">Ambiente</a>
                    </li>
                    <li>
                      <a href="#">Salute, benessere e assistenza</a>
                    </li>
                    <li>
                      <a href="#">Autorizzazioni</a>
                    </li>
                    <li>
                      <a href="#">Agricoltura e pesca</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 footer-items-wrapper">
              <h3 className="footer-heading-title">Novità</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">Notizie</a>
                </li>
                <li>
                  <a href="#">Comunicati</a>
                </li>
                <li>
                  <a href="#">Avvisi</a>
                </li>
              </ul>
              <h3 className="footer-heading-title">Vivere il comune</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">Luoghi</a>
                </li>
                <li>
                  <a href="#">Eventi</a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 mt-md-4 footer-items-wrapper">
              <h3 className="footer-heading-title">Contatti</h3>
              <div className="row">
                <div className="col-md-4 text-white">
                  <p className="footer-info">Comune di Nome Comune<br/>
                    Via Roma 123 - 00100 Comune<br/>
                    Codice fiscale / P. IVA: 00123456789<br/><br/>
                    <a href="#">Ufficio Relazioni con il Pubblico</a><br/>
                    Numero verde: 800 016 123<br/>
                    SMS e WhatsApp: +39 320 1234567<br/>
                    Posta Elettronica Certificata<br/>
                    Centralino unico: 012 3456
                  </p>
                </div>

                <div className="col-md-4">
                  <ul className="footer-list">
                    <li>
                      <a href="#" data-element="faq">Leggi le FAQ</a>
                    </li>
                    <li>
                      <a href="#">Prenotazione appuntamento</a>
                    </li>
                    <li>
                      <a href="#" data-element="report-inefficiency">Segnalazione disservizio</a>
                    </li>
                    <li>
                      <a href="#">Richiesta d'assistenza</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <ul className="footer-list">
                    <li>
                      <a href="#">Amministrazione trasparente</a>
                    </li>
                    <li>
                      <a href="#" data-element="privacy-policy-link">Informativa privacy</a>
                    </li>
                    <li>
                      <a href="#">Note legali</a>
                    </li>
                    <li>
                      <a href="#" data-element="accessibility-link">Dichiarazione di accessibilità</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
           
          <div className="row">
            <div className="col-12 footer-items-wrapper">
              <div className="footer-bottom">
                <a href="#">Media policy</a>
                <a href="#">Mappa del sito</a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </footer>
    </>
   );
}
 
export default memo(Footer);