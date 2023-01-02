import { useState, useContext } from "react";
import classes from "./style.module.css";
import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";

const ResetLink = () => {

  let { api_urls } = useContext(ConfigContext);
  let { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
  });

  const [ error, setError ] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${api_urls.backend}/forgot_password`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        // Authorization: `Bearer ${user?.token}`
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then(data => {
      if (data.success) {
        setError(data.message);
      } else {
        setError(data.message);
      }
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
      <label className='mb-3'>Inserisci la tua email e ti manderemo un link per il reset!</label>
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
      {error && <span className='text-danger py-1 text-sm'>{error}</span>}
  </form>
   );
}
 
export default ResetLink;