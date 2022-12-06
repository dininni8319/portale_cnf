import { useState, useContext } from "react";
import classes from "./style.module.css";
import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";

const ResetPassword = () => {

  let { api_urls } = useContext(ConfigContext);
  let { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
  });

  const [ error, setError ] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${api_urls.backend}/api/forgot_password`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        // Authorization: `Bearer ${user?.token}`
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        console.log(response,'testing th response')
      })
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return ( 
    <form
      className='mt-3 d-flex flex-column align-items-center justify-content-end'
      onSubmit={handleSubmit}
    >
      <h2 className='h2 mb-3 fw-bold'>Invia il Link</h2>
      <p className='mb-3'>Inserisci la tua email e ti manderemo un link per il reset!</p>
      <div className="mb-3 col-md-8">
        <input
          placeholder={'Email'}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="email"
          className={`form-control  ${classes['form-group-reset-p']}`}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn-grad px-5 fw-bold"
          disabled={!formData.email}
        >
          Invia il link
        </button>
      </div>
  </form>
   );
}
 
export default ResetPassword;