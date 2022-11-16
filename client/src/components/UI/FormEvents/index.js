import useInput from "../../Hooks/useInput";

const FormEvents = () => {
  const email = useInput("");
  const name = useInput("");
  const description = useInput("");
  const date = useInput("");
  const time = useInput("");

  const handleEvent = (event) => {
    event.preventDefault();
    // console.log({email: email.value, password: password.value}, 'response from the server when we try to login');

    fetch(`http://localhost:8000/api/calendar/create/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        email: email.value, 
        name: name.value,
        description: description.value,
        date: date.value,
        time: time.value
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'testing the data');
      
      });
  };
  return ( 
    <>
      <form className="mb-3 row" onSubmit={handleEvent}>
           <div>
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input 
                type="email"  
                className="form-control-plaintext" 
                id="staticEmail" 
                value="email@example.com" 
                {...email}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" {...name}/>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10">
              <textarea name="" id="" cols="30" rows="10" {...description}>description</textarea>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputDate" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" id="inputDate" {...date}/>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputDate" className="col-sm-2 col-form-label">Time</label>
            <div className="col-sm-10">
              <input type="time" className="form-control" id="inputDate" {...time}/>
            </div>
          </div>
          <button type="submit">Submit</button>
      </form>
    </>  
   );
}
 
export default FormEvents;