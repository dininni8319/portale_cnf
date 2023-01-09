import { useState, useContext } from 'react';
import classes from '../SignIn/style.module.css';
import { ConfigContext } from "../../../Contexts/Config";
import { useNavigate } from "react-router";
import { isEmptyObject } from "../../../utilities";
import { AuthContext } from '../../../Contexts/Auth';

const PasswordResetForm = ({ token }) => {
  const navigate = useNavigate();
  let { api_urls } = useContext(ConfigContext);
  const { login } = useContext(AuthContext);
  const [ email, setEmail ] = useState('')
  console.log(email,'testing the email')

  const [formData, setFormData] = useState({
    password: '',
    password_confirm: '',
    token: '',
  });

  const [ error, setError ] = useState('');
  // Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${api_urls.backend}/reset`, {
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
        setEmail(data.email)
      } else {
        setError(data.message)
      }
    })
    .then(() => {
      if (email) {
        
        fetch(`${api_urls?.backend}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: formData.password,
          })
        })
          .then((response) => response.json())
          .then((data) => {
              const token = data.token;
    
            if (email) {  
              fetch(`${api_urls?.backend}/view-profile`, {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then((response) => response.json())
              .then((data) => {
                login(data.data.name, token, data.data.id);
                navigate("/adminarea"); //object history;
              });}
          })
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
      className='d-flex flex-column align-items-center mt-5 pt-5 custom-height-class'
      onSubmit={handleSubmit}
    >
      <div className="row flex-column shadow p-5">
        <h2 className='h2 mb-3 fw-bold'>Crea le nuove credenziali!</h2>

        <div className="mb-3 col-12">
          <input
            placeholder='Nuova Password'
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
            className={`form-control ${classes['form-group-reset-p']}`}
          />
        </div>
        <div className="mb-3 col-12">
          <input
            placeholder='Conferma la Password'
            value={formData.confirmPassword}
            name="password_confirm"
            onChange={handleFieldChange}
            type="password"
            className={`form-control ${classes['form-group-reset-p']}`}
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-grad px-5 fw-bold"
            disabled={!formData.password_confirm || !formData.password}
          >
            Invia
          </button>
        </div>
        {!isEmptyObject(error) && <span className='text-danger'>{error?.data.message}</span>}
    </div>
  </form>
  );
};


export default PasswordResetForm;
