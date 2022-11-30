import classes from './style.module.css';

const NotFound = () => {
  return ( 
    <div className={`custom-height-class ${classes['nt-body']}`}>
      <h1 className={classes.title}>Not found 404!</h1>
      <p className={classes['nt-text']}>Siamo spiacenti, la pagina che stai cercando non è disponibile!</p>
    </div>
   );
}
 
export default NotFound;