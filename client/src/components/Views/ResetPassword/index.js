import { ResetPasswordForm } from "../../UI/index";
import { useParams  } from 'react-router';

const ResetPassword = () => {
  const { token } = useParams();
  
  return ( 
    <>
      <ResetPasswordForm  token={token}/>
    </>
   );
}
 
export default ResetPassword;