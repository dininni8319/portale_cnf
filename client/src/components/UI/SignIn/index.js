import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";
import { useState, useContext } from "react";
import classes from "./style.module.css";

export default function SignIn() {
  const navigate = useNavigate();
  const username = useInput("");
  const last_name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const passwordConfirm = useInput("");

  let { api_urls } = useContext(ConfigContext);
  let { login } = useContext(AuthContext);

  const [ error, setError ] = useState('');

  console.log(error, 'testing');
  const Login = (event) => {
    event.preventDefault();

    if (password.value === passwordConfirm.value) {

      fetch(`${api_urls.backend}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username.value,
          last_name: last_name.value,
          email: email.value,
          password: password.value,
          password_confirmation: passwordConfirm.value,
        }),
      })
        .then((response) => {
         
          if (response.ok) {
            navigate("/");
            return response.json();
          } else {
            setError('I dati sono incorretti')
            navigate("/");
          }
        })
        .then(() => {
          fetch(`${api_urls?.backend}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              const token = data.token;

              fetch(`${api_urls?.backend}/api/view-profile`, {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((response) => response.json())
                .then((data) => {
                  login(data.data.name, token, data.data.id);
                  navigate("/adminarea"); //object history;
                });
            });
        });
    } else {
      alert("the passwords are not the same");
    }
  };

  return (
    <>
      <form onSubmit={Login} className={`${classes['form-custom-class']}`}>
        <div className="mb-3 col-md-10">
          <h2 className='h2 mb-3 fw-bold'>Registrati</h2>
          <label className="form-label" htmlFor="userName">
            Inserisci il tuo nome
          </label>
          <input
            type="text"
            className={`${classes['form-group-custom']}`}
            id="userName"
            {...username}
          />
        </div>
        <div className="mb-3 col-md-10">
          <label className="form-label" htmlFor="userName">
           Inserisci il tuo cognome
          </label>
          <input
            type="text"
            className={`${classes['form-group-custom']}`}
            id="userName"
            {...last_name}
          />
        </div>
        <div className="mb-3 col-md-10">
          <label className="form-label" htmlFor="userMail">
            Inserisci il tua Email
          </label>
          <input
            type="email"
            className={`${classes['form-group-custom']}`}
            id="userMail"
            {...email}
          />
        </div>
        <div className="mb-3 col-md-10">
          <label className="form-label" htmlFor="userPassword">
           Inserisci il tua password
          </label>
          <input
            type="password"
            className={`${classes['form-group-custom']}`}
            id="userPassword"
            {...password}
          />
        </div>
        <div className="mb-3 col-md-10">
          <label className="form-label" htmlFor="userPasswordConfirm">
          Inserisci il tua password
          </label>
          <input
            type="password"
            className={`${classes['form-group-custom']}`}
            id="userPasswordConfirm"
            {...passwordConfirm}
          />
        </div>
        <div className="mb-3 col-md-9 d-flex justify-content-center">
        <button 
          type="submit" 
          className="btn-grad px-5 fw-bold"
          disabled={
            !email.value 
            || !passwordConfirm.value
            || !password.value
            || !username.value
          }
        >
          Registrati
        </button>
      </div>
      </form>
    </>
  );
}
