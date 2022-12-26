import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router";
import { AuthContext } from "./../../../Contexts/Auth/index";
import { useContext, useState } from "react";
import { ConfigContext } from "./../../../Contexts/Config";
import { validEmail } from "../../../utilities";
import classes from "../SignIn/style.module.css";

export default function SignUp() {
  const navigate = useNavigate();
  let { login } = useContext(AuthContext);
  let { api_urls } = useContext(ConfigContext);
  const email = useInput("");
  const password = useInput("");
  const [ error, setError ] = useState({});

  const signUp = (event) => {
    event.preventDefault();

    fetch(`${api_urls.backend}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.token;

        fetch(`${api_urls.backend}/view-profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
        
            if (data.success) {
              let username = `${data.data.name} ${data.data.last_name}`
              login( username, token, data.data.id);
              navigate("/adminarea");   
            } else {
              setError({...error,err:'Le credenziali sono errate!'})
            }
          });
      });
  };

  return (
    <form className={`${classes['form-custom-class']}`} onSubmit={signUp}>
      <div className="mb-3 col-md-9">
        <h2 className='h2 mb-3 fw-bold'>Login</h2>
        <label className="form-label" htmlFor="userMail">
          {" "}
          Inserisci la tua email
        </label>
        <input
          type="email"
          className={`${classes['form-group-custom']}`}
          id="userMail"
          {...email}
        />
      </div>
      <div className="mb-3 col-md-9">
        <label className="form-label" htmlFor="userPassword">
          {" "}
          Inserisci la tua password
        </label>
        <input
          type="password"
          className={`${classes['form-group-custom']}`}
          id="userPassword"
          {...password}
        />
      </div>
      <div className="mb-3 col-md-9 d-flex justify-content-center">
        <button 
          type="submit" 
          className="btn-grad px-5 fw-bold"
          disabled={
            !email.value 
            || !password.value
          }
        >
          Login
        </button>
      </div>
      {error?.err && <span className='text-danger'>{error?.err}</span>}
    </form>
  );
}
