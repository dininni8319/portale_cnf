import classes from './style.module.css';
import { memo } from 'react';

const ServiziOnline = () => {
    return ( 
        <div className="custom-height-className">
            <section id={`${classes.briciole}`}>
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-1 col-lg-10 col-md-12">
                            <nav className={classes["breadcrumb-container"]} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className={classes["breadcrumb-item"]}><a href="index.html" title="Vai alla pagina Home">Home</a><span className="separator">/</span></li>
                                    <li className={classes["breadcrumb-item"]}><a href="servizi.html" title="Vai alla pagina Servizi">Servizi On-Line</a><span className="separator">/</span></li>
                                    {/* <li className={classes["breadcrumb-item"]}><a href="#">Richiesta appuntamento</a></li> */}
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
                                <h2 className={`h2 fs-1 fw-bolder text-center w-100 py-3 ${classes['text-blue-color']}`}>Servizi online</h2>
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
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-descr_est" title="Vai al paragrafo Cos'è">Cosa fa</a>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-desc_dest" title="Vai al paragrafo A chi si rivolge">Servizi</a>
                                    <a className={`${classes.a} ${classes['list-group-item']} ${classes['list-group-item-action']}`} href="#articolo-par-uffici" title="Vai al paragrafo Uffici">Ulteriori informazioni</a>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-9 col-md-8 pt8">
                            <div className={classes["articolo-paragrafi"]}>
                                <div className="row">
                                    <div className={`offset-md-1 col-md-11 ${classes.paragrafo} mt-3`}>
                                        <a id={classes["articolo-par-descr_est"]} className={classes.a}></a>
                                        <h4>Cosa fa</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`offset-md-1 col-md-8 ${classes.testolungo}`}>
                                        <p>
                                        Attraverso questa sezione potrai accedere con pochi clic a tutti i servizi messi a disposizione dall'amministrazione sul web. I servizi sono organizzati per aree tematiche e per poter utilizzare alcuni di essi dovrai essere in possesso di credenziali SPID o registrandosi al portale.
                                        </p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="row">
                                    <div className={`offset-md-1 col-md-11 ${classes.paragrafo} mt-3`}>
                                        <a id={classes["articolo-par-descr_est"]} className={classes.a}></a>
                                        <h4>Servizi</h4>
                                    </div>
                                </div>
                                    <div className={`offset-md-1 col-md-8 ${classes.testolungo}`}>
                                        <ul className={classes['ul-style']}>
                                            <li>Consultazione della propria posizione contributiva</li>
                                            <li>Pagamento online (circuito PagoPA)</li>
                                            <li>Invio di dichiarazioni ed istanze</li>
                                            <li>Consultazione dei dati catastali</li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className={`offset-md-1 col-md-8 ${classes.testolungo}`}>
                                        <div className="articolo-mt0">
                                            <p>
                                            Attraverso questa sezione è anche possibile richiedere un appuntamento completamente online, con l'invio di tutta la documentazione che si ritiene necessaria.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className={`offset-md-1 col-md-11 ${classes.testolungo}`}>
                                        <a id={classes["articolo-par-desc_dest"]} className={classes.a}></a>
                                        <h4>Servizi</h4>
                                    </div>
                                </div>

                                <div className={`row ${classes.schede}`}>
                                <div className="offset-md-1 col-md-11">
                                    <div className="row row-eq-height mb-2">
                                        <div className="col-md-6">
                                            <article className={`${classes.scheda} ${classes[" scheda-round"]} p-3`}>
                                                <div className={classes["scheda-icona-small"]}>
                                                    <h5>
                                                        {/* <svg className="icon">
                                                            <use xlink:href="static/img/ponmetroca.svg#ca-settings"></use></svg> */}
                                                        Generale
                                                    </h5>
                                                </div>
                                                <div className={classes["scheda-icona-small"]}>
                                                    <h4 className='text-success'><a href="/reserve">Richiedi un appuntamento</a></h4>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-md-6">
                                            <article className={`${classes.scheda} ${classes[" scheda-round"]} p-3`}>
                                                <div className={classes["scheda-icona-small"]}>
                                                    {/* <svg className="icon">
                                                        <use xlink:href="static/img/ponmetroca.svg#ca-settings"></use></svg> */}
                                                    Pagamenti On-Line
                                                </div>
                                                <div className={classes["scheda-testo-small"]}>
                                                    <h4><a href="#" >Stampa il modulo di pagamento o paga la tua pendenza direttamente OnLine con PagoPA</a></h4>
                                                </div>
                                            </article>
                                        </div>
                                    </div>

                                    <div className={`row ${classes['row-eq-height']}`}>
                                        <div className="col-md-6">
                                            <article className={`${classes.scheda} ${classes[" scheda-round"]} p-3`}>
                                                <div className={classes["scheda-icona-small"]}>
                                                    {/* <svg className="icon"> */}
                                                        {/* <use xlink:href="static/img/ponmetroca.svg#ca-settings"></use></svg> */}
                                                    Tributi
                                                </div>
                                                <div className={classes["scheda-testo-small"]}>
                                                    <h4><a href="#">Consulta la propria posizione contributiva, dati presenti nell'anagraf civile ed in catasto</a></h4>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-md-6">
                                            <article className={`${classes.scheda} ${classes[" scheda-round"]} p-3`}>
                                                <div className={classes["scheda-icona-small"]}>
                                                    {/* <svg className="icon">
                                                        <use xlink:href="static/img/ponmetroca.svg#ca-settings"></use></svg> */}
                                                    Tributi
                                                </div>
                                                <div className={classes["scheda-testo-small"]}>
                                                    <h4><a href="#">Invia dichiarazioni o istanze in autotutela, oltre che a produrre autocertificazioni</a></h4>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className={`offset-md-1 col-md-11 ${classes.testolungo}`}>
                                    <h4>Attenzione</h4>
                                    <p>Per i alcuni servizi è necessario accedere all'area riservata.</p>
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className={`offset-md-1 col-md-11 ${classes.testolungo}`}>
                                    <h4 className='fw-bold'>Ulteriori informazioni</h4>
                                    <p>Per i alcuni servizi è necessario accedere all'area riservata.</p>
                                    <aside>Ultimo aggiornamento</aside>
                                    <strong>26/08/2020</strong>
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
 
export default memo(ServiziOnline);