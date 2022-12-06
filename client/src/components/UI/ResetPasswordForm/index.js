import { useState, useContext } from 'react';
import classes from '../SignIn/style.module.css';
import { ConfigContext } from "../../../Contexts/Config";
import { useNavigate } from "react-router";
import { isEmptyObject } from "../../../utilities";
const PasswordResetForm = ({ token }) => {
  
  const navigate = useNavigate();
  let { api_urls } = useContext(ConfigContext);

  const [formData, setFormData] = useState({
    password: '',
    password_confirm: '',
    token: '',
  });

  const [ error, setError ] = useState({});
  
  console.log(error);
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
      .then((response) => response.json())
      .then(data => {
        if (data.success) {
          navigate('/sign')
        } else {
          console.log('test');
          setError({...error, data})
        }
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
    className='mt-3 d-flex flex-column align-items-center justify-content-end p-5'
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
        name="password_confirm"
        onChange={handleFieldChange}
        type="password"
        className={`form-control  ${classes['form-group-reset-p']}`}
      />
    </div>

    <div className="d-flex justify-content-center">
      <button
        type="submit"
        className="btn-grad px-5 fw-bold"
        disabled={!formData.password_confirm || !formData.password}
      >
        Invia
      </button>
      
    </div>
    
      {!isEmptyObject(error) && <span className='text-danger'>{error?.data.message}</span>}
  </form>
  );
};


export default PasswordResetForm;
