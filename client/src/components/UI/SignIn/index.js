import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";
import { useContext, useState } from "react";
import  classes from "./style.module.css";

export default function SignIn() {
  const navigate = useNavigate();
  const username = useInput("");
  const last_name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const passwordConfirm = useInput("");

  let { api_urls } = useContext(ConfigContext);
  let { login } = useContext(AuthContext);
  // console.log(api_urls.backend, 'test backend 2');
  const Login = (event) => {
    event.preventDefault();

    if (password.value === passwordConfirm.value) {
      // proseguire
      //fetch register
      //fetch login
      //fetch view-profile

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
            alert("ops..");
          }
        })
        .then(() => {
          fetch(`${api_urls.backend}/api/login`, {
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

              /// una volta ricevuto il token, possiamo richiedere informazioni come username e email ad esempio
              //alla rotta view profile
              fetch(`${api_urls.backend}/api/view-profile`, {
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
      <form  onSubmit={Login} className='d-flex flex-column align-items-center'>
        <div className={`${"sign-top"}`}></div>
        <div className={`${"sign-bottom"}`}></div>
        <div className="mb-3 col-md-10">
          <h2 className='h2 mb-3 fw-bold'>Registrati</h2>
          <label className="form-label" htmlFor="userName">
            Inserisci il tuo nome
          </label>
          <input
            type="text"
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
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
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
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
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
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
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
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
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
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
