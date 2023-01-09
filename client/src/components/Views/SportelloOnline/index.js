import classes from './style.module.css';
import { memo } from 'react';

const SportelloOnline = () => {
    return ( 
        <div className="custom-height-class">
            <section id={`${classes.briciole}`}>
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-1 col-lg-10 col-md-12">
                            <nav className={classes["breadcrumb-container"]} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className={classes["breadcrumb-item"]}><a href="index.html" title="Vai alla pagina Home">Home</a><span className="separator">/</span></li>
                                    <li className={classes["breadcrumb-item"]}><a href="servizi.html" title="Vai alla pagina Servizi">Servizi On-Line</a><span className="separator">/</span></li>
                                    <li className={classes["breadcrumb-item"]}><a href="#">Richiesta appuntamento</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section id="intro">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-1 col-lg-6 col-md-8">
                            <div className={classes["titolo-sezione"]}>
                                <h2 className={`h2 fs-1 fw-bolder text-center w-100 py-3 ${classes['text-blue-color']}`}>Richiedi un appuntamento</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={classes["articolo-dettaglio-testo"]}>
                <div className={`container ${classes['profilo-dettaglio-testo']}`}>
                    <div className="row">
                        <div className={classes["linetop-lg"]}></div>
                        <div className={`col-lg-3 col-md-4 ${classes.lineright}`}>
                            <aside id={classes["menu-sinistro"]}>
                                <h4 className="dropdown">
                                    <a className={classes.a} data-toggle="collapse" href="#lista-paragrafi" role="button" aria-expanded="true" aria-controls="lista-paragrafi">Indice della pagina
                                        {/* <svg className="icon"> */}
                                        {/* <use xlink:href="static/img/bootstrap-italia.svg#it-collapse"></use></svg> */}
                                    </a>
                                </h4>
                                <div className={classes["menu-separatore"]}>
                                    <div className={classes["bg-oro"]}></div>
                                </div>
                                <div id={classes["lista-paragrafi"]} className={`${classes['list-group']} collapse show`}>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-descr_est" title="Vai al paragrafo Cos'è">Cos'è</a>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-desc_dest" title="Vai al paragrafo A chi si rivolge">A chi si rivolge</a>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-uffici" title="Vai al paragrafo Uffici">Uffici</a>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-cosa_serve" title="Vai al paragrafo Cosa serve">Cosa serve</a>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-costi_vinc" title="Vai al paragrafo Costi e vincoli">Date disponibili</a>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-link" title="Vai al paragrafo Siti esterni">Costi e vincoli</a> 
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-9 col-md-8 pt8">
                            <div className={classes["articolo-paragrafi"]}>
                                <div className="row">
                                    <div className={`offset-md-1 col-md-11 ${classes.paragrafo} mt-3`}>
                                        <a id={classes["articolo-par-descr_est"]} className={classes.a}></a>
                                        <h4>Cos'è</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`offset-md-1 col-md-8 ${classes.testolungo}`}>
                                        <p>
                                            Da questa sezione puoi richiedere un appuntamento presso lo sportello di ricevimento.<br />
                                            Il sistema provvederà a pianificare il tuo appuntamento.
                                        </p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`offset-md-1 col-md-11 ${classes.testolungo}`}>
                                        <a id={classes["articolo-par-desc_dest"]} className={classes.a}></a>
                                        <h4>A chi si rivolge</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`offset-md-1 col-md-8 ${classes.testolungo}`}>
                                        <ul className={classes['ul-style']}>
                                            <li>Cittadini</li>
                                            <li>Professionisti</li>
                                            <li>Imprese</li>
                                            <li>Associazioni</li>

                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className={`offset-md-1 col-md-8 ${classes.testolungo}`}>
                                        <p className={classes["articolo-titoletto"]}>Procedure collegate all'esito</p>
                                        <div className="articolo-mt0">
                                            <p>
                                                Una volta effettuato l'appuntamento si riceverà un'email con la conferma dell'appuntamento e le indicazioni su:
                                                <ul className={classes['ul-style']}>
                                                    <li>dove presentarsi</li>
                                                    <li>l'orario dell'appuntamento</li>
                                                    <li>eventuali documenti da portare con sè</li>
                                                </ul>
                                                Il giorno precedente l'appuntamento si riceverà inoltre un nuovo messaggio di cortesia per ricordare l'appuntamento
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className={`offset-md-1 col-md-11 ${classes.testolungo}`}>
                                        <a id={classes["articolo-par-uffici"]} className={classes.a}></a>
                                        <h4>Uffici</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`offset-md-1 col-md-8 ${classes.listalunghi}`}>
                                        <div className="row shadow my-3">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <article className={`${classes['scheda-ufficio-contatti']} ${classes['scheda-round']}`}>
                                                    
                                                    <div className={classes["scheda-ufficio-testo"]}>
                                                        <h4 className="mb24">
                                                            <a href="#" className={classes.a}>Sede legale</a>
                                                            <br />
                                                            <span>Via Flavio Gioia 39  Verona - 37135<br /></span>
                                                                
                                                        </h4>
                                                        <p>
                                                            <strong>Orari:</strong><br />
                                                        Per informazioni o chiarimenti è possibile contattare il numero  
                                                        <strong> 045 8760076</strong>  dal lunedì al venerdì, escluso i giorni festivi, nelle seguenti fasce orarie:			<br />
                                                            <ul>
                                                                <li>dalle ore 10:00 alle ore 12:00 </li>
                                                                <li>dalle ore 15:00 alle ore 18:00. </li>
                                                            </ul>
                                                        </p>
                                                        <p>
                                                            <br />
                                                            <strong>Contatti:</strong><br />
                                                            Telefono: +39 045 8760076<br />
                                                            E-mail: <a className={classes.a} href="mailto:gestioneistanze.turi@cienneffe.com" title="Scrivi una email">Gestione istanze</a><br />
                                                            E-mail: <a className={classes.a} href="mailto:cnf@pec.it﻿" title="Scrivi una email">PEC</a><br />
                                                        </p>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="offset-md-1 col-md-11 paragrafo">
                                        <a id={classes["articolo-par-cosa_serve"]} className={classes.a}></a>
                                        <h4>Cosa serve</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="offset-md-1 col-md-8">
                                        <div className={`${classes.callout} ${classes.important} ${classes['callout-punti']}`}>
                                            <div className="callout-title">
                                                {/* <svg className="icon icon-primary">
                                                    <use xlink:href="static/img/bootstrap-italia.svg#it-info-circle"></use></svg> */}
                                            </div>
                                            <div className={classes["callout-punto"]}>
                                                
                                                <div className={classes["callout-punto-testo"]}>
                                                    <p>Non serve alcun documento, solo indicare:</p>
                                                    <ul>
                                                        <li>Codice fiscale</li>
                                                        <li>Telefono cellulare</li>
                                                        <li>indirizzo e-mail</li>
                                                        <li>eventuali ulteriori dati anagrafici</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="offset-md-1 col-md-11 paragrafo mb-3">
                                        <a id={classes["articolo-par-costi_vinc"]} className={classes.a}></a>
                                        <h4>Date disponibili</h4>
                                        <span>Vuoi essere contattato da un'operatore?<br />
                                            Seleziona il giorno e l'orario a te più consono.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default memo(SportelloOnline);