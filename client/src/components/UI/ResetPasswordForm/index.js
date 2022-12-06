import { useState, useContext } from 'react';
import classes from '../SignIn/style.module.css';
import { ConfigContext } from "../../../Contexts/Config";

const PasswordResetForm = ({ token }) => {
  
  let { api_urls } = useContext(ConfigContext);

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    token: '',
  });

  // Handler
  const handleSubmit = e => {
    e.preventDefault();

    fetch(`${api_urls.backend}/api/reset`, {
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
      [e.target.name]: e.target.value,
      ['token']: token
    });
  };

  return (
    <form
    className='mt-3 d-flex flex-column align-items-center justify-content-end'
    onSubmit={handleSubmit}
    >

    <h2 className='h2 mb-3 fw-bold'>Crea delle nuove credenziali</h2>
    <div className="mb-3 col-md-8">
      <input
        placeholder='Nuova Password'
        value={formData.password}
        name="password"
        onChange={handleFieldChange}
        type="password"
        className={`form-control  ${classes['form-group-reset-p']}`}
      />
    </div>

    <div className="mb-3 col-md-8">
      <input
        placeholder='Conferma la Password'
        value={formData.confirmPassword}
        name="confirmPassword"
        onChange={handleFieldChange}
        type="password"
        className={`form-control  ${classes['form-group-reset-p']}`}
      />
    </div>

    <div className="d-flex justify-content-center">
      <button
        type="submit"
        className="btn-grad px-5 fw-bold"
        disabled={!formData.confirmPassword || !formData.password}
      >
        Invia
      </button>
    </div>
  </form>
  );
};


export default PasswordResetForm;
