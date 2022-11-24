import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { AuthContext } from "./../../../Contexts/Auth/index";
import { useContext } from "react";
import { ConfigContext } from "./../../../Contexts/Config";
import  classes from "./style.module.css";

export default function SignUp() {
  const navigate = useNavigate();
  let { login } = useContext(AuthContext);
  let { api_urls } = useContext(ConfigContext);
  const email = useInput("");
  const password = useInput("");

  const signUp = (event) => {
    event.preventDefault();

    fetch(`${api_urls.backend}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
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
            login(data.data.username, token, data.data.id);
            navigate("/adminarea"); 
          });
      });
  };

  return (
    <form className={`${"sign-form"}`} onSubmit={signUp}>
      <div className={`${"sign-top"}`}></div>
      <div className={`${"sign-bottom"}`}></div>
      <div className="mb-5">
        <h2 className='h2 mb-5 fw-bold'>Login</h2>
        <label className="form-label" htmlFor="userMail">
          {" "}
          Inserisci la tua email
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
          {" "}
          Inserisci la tua password
        </label>
        <input
          type="password"
          className="form-control bg-transparent border-0 border-bottom border-gray rounded-0"
          id="userPassword"
          {...password}
        />
      </div>
      <div className="mb-5">
        <button type="submit" className="btn btn-dark px-5 rounded-0 fw-bold">
          Login
        </button>
      </div>
    </form>
  );
}
