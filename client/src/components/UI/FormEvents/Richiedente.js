import { memo, useState } from "react";

const Richiedente = ( { 
  email, 
  first_name,
  last_name, 
  phone, 
  codicefiscale,
  focus, 
  focusHandler,
}) => {

  const validFiscalCode = '^[A-Za-z]{6}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{3}[A-Za-z]{1}$'
  const validateEmail = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
  return ( 
    <section className="component-wrapper  px-5 col-12 col-md-11">
        <h4 className='h4'>Richiedente</h4>
         <div>
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email*</label>
            <div className="col-sm-10">
              <input 
                type="email"  
                className="input-custom-style" 
                id="staticEmail"
                onBlur={focusHandler}
                pattern={validateEmail}
                focused={focus.toString()}
                {...email} 
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name*</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style" 
                id="inputName" 
                onBlur={focusHandler}
                focused={focus.toString()}
                {...first_name} 
                required
              />
              {/* {focus && !first_name.value && <span className='fs-6 text-danger'>Il nome è obblibatorio</span>} */}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Cognome*</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style"
                onBlur={focusHandler}
                focused={focus.toString()} 
                id="inputLastName" {...last_name} 
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Codice Fiscale*</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style" 
                id="inputPhone" 
                onBlur={focusHandler}
                focused={focus.toString()}
                pattern={validFiscalCode}
                {...codicefiscale}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Telefono</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="input-custom-style" 
                id="inputPhone" 
                {...phone}
                // onBlur={focusHandler}
                // focused={focus.toString()}
                // pattern="^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
              />
            </div>
          </div>
    </section>
   );
}
 
export default memo(Richiedente);