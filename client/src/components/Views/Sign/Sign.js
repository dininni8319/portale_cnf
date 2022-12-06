import { useState } from "react";
import classes from "./Sign.module.css";
import { SignIn, SignUp, ResetPassword } from "../../UI/index";
import BuildingImg from './../../../assets/img/building-picture.jpg';

export default function Sign(params) {
  const [isLogin, setIsLogin] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState(false);
  
  const handleResetPassword = () => {
    setIsLogin(false);
    setIsResetPassword(true);
  }

  const handleAuth = () => {
    setIsLogin(!isLogin);
    setIsResetPassword(false);
  }

  return (
    <div className={`container-fluid custom-height-class`}>
      <div className="row">
          <div className='p-0'>
            <div className='img-cover'>
            </div>
              <img src={BuildingImg} alt="login image" className='building-img'/>
          </div>
          <div className={`col-11 col-md-4 text-center ${classes.shadow}`}>
            {!isResetPassword && (isLogin ? <SignUp /> : <SignIn />)}
            {isResetPassword &&  <ResetPassword /> }
            <button
              className="mt-5 rounded-0 bg-transparent fw-bold fs-6"
              onClick={handleAuth}
            >
              {isLogin ? "Non sei un Autente? Registrati Adesso!" : "Sei un Autente? Vai al Login"}
            </button>

            <div>
              <button 
               className='text-info bg-transparent' 
               onClick={handleResetPassword}>
               Dimenticato la password
              </button>
              </div>
          </div>
      </div>
    </div>
  );
}
