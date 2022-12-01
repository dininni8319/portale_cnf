import classes from "./Sign.module.css";
import { useState } from "react";
import { SignIn, SignUp } from "../../UI/index";

export default function Sign(params) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`container-fluid py-5 custom-height-class`}>
      <div className="container">
        <div className={`row justify-content-center align-items-center`}>
          <div className={`col-12 col-md-8 col-lg-6 text-center ${classes.shadow} p-2 p-md-5`}>
            {isLogin ? <SignUp /> : <SignIn />}
            <button
              className="mt-5 btn btn-outline-secondary rounded-0 "
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Non sei un Autente? Registrati Adesso!" : "Sei un Autente? Vai al Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
