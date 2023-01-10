import classes from './style.module.css';
import { memo } from 'react';
import Detais from './details';

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
                                <h2 className={`h2 fs-1 fw-bolder text-center w-100 py-3 ${classes['text-blue-color']}`}>Servizi On-line</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Detais />
        </div>
    );
}
 
export default memo(ServiziOnline);