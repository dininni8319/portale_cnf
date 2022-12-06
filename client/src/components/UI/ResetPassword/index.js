import { useState } from "react";
const ResetPassword = () => {

  const [formData, setFormData] = useState({
    email: '',
  });

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return ( 
    <form
    className='mt-3 d-flex flex-column align-items-center justify-content-end'
    onSubmit={handleSubmit}
  >
    <h2 className='h2 mb-3 fw-bold'>Invia il Link</h2>
    <p className='mb-3'>Inserisci la tua email e ti manderemo un link per il reset!</p>
    <div className="mb-3 col-md-8">
      <input
        placeholder={'Email'}
        value={formData.email}
        name="email"
        onChange={handleFieldChange}
        type="email"
        className='form-control bg-transparent border border-gray rounded-1 my-2 py-2'
      />
    </div>
    <div className="d-flex justify-content-center">
      <button
        type="submit"
        className="btn-grad px-5 fw-bold"
        disabled={!formData.email}
      >
        Invia il link
      </button>
    </div>
  </form>
   );
}
 
export default ResetPassword;