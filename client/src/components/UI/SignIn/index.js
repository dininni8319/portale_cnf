import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";
import { useContext, useState } from "react";
import  classes from "./style.module.css";

export default function SignIn() {
  const navigate = useNavigate();
  const username = useInput("");
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
    // console.log(api_urls.backend);
      fetch(`${api_urls.backend}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username.value,
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
      <form className={`${classes["sign-form"]}`} onSubmit={Login}>
        <div className={`${"sign-top"}`}></div>
        <div className={`${"sign-bottom"}`}></div>
        <div className="mb-5">
          <h2 className='h2 mb-5 fw-bold'>Registrati</h2>
          <label className="form-label" htmlFor="userName">
            Enter your User Name
          </label>
          <input
            type="text"
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
            id="userName"
            {...username}
          />
        </div>
        <div className="mb-5">
          <label className="form-label" htmlFor="userMail">
            Enter your Email
          </label>
          <input
            type="email"
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
            id="userMail"
            {...email}
          />
        </div>
        <div className="mb-5">
          <label className="form-label" htmlFor="userPassword">
            Enter a new Password
          </label>
          <input
            type="password"
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
            id="userPassword"
            {...password}
          />
        </div>
        <div className="mb-5">
          <label className="form-label" htmlFor="userPasswordConfirm">
            Confirm the entered Password
          </label>
          <input
            type="password"
            className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
            id="userPasswordConfirm"
            {...passwordConfirm}
          />
        </div>
        <div className="mb-5">
          <button type="submit" className="btn btn-dark px-5 rounded-0">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
