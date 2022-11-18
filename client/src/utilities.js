// Everything except weekend days
export const excludeWeekends = dateString => {
  const day = (new Date(dateString)).getDay();
  if (day==0 || day==6) {
    return false;
  }
  return true;
}

export function getCurrentDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    } 
        
    return yyyy + '-' + mm + '-' + dd;
}

export function formatDate(date){
  if (!date) return "The date was not found!";
  let time = new Date(date);
  let timeNow = new Date().getDay();

  let day = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear()

  return ` ${day < 10 ? "0" + day: day}.${month < 10 ? "0" + month : month
  }.${year}`;
}


export const validEmail = ( email ) => {
  const regex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
  return email
    .toLowerCase()
    .match(regex)
}

export const validateFiscalCode = ( code ) => {
  const regex = /^[A-Za-z]{6}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{3}[A-Za-z]{1}$/g;
  return code.match(regex);
}

export const validateForm = ( values ) => {

  const { email, first_name, last_name, date, time, codicefiscale, tipologiaRichiesta, ufficio } = values;
  const error = {};

  if (!email) {
   error.email = `La email è obbligatoria!`; 
  }

  if (!validEmail(email)) {
    error.email = 'La mail non è valida!';
  }

  if (!validateFiscalCode(codicefiscale)) {
    error.codicefiscale = 'La codice fiscale non è valido!';
  }

  if (!first_name) {
    error.first_name = `Il nome è obbligatorio`; 
  }

  if (!last_name) {
    error.last_name = `Il cognome è obbligatorio!`; 
  }

  if (!codicefiscale) {
    error.last_name = `Il codice fiscale è obbligatorio!`; 
  }

  if (!date) {
    error.last_name = `La data è obbligatoria!`; 
  }

  if (!time) {
    error.last_name = `L'orario è obbligatorio!`; 
  }

  if (!tipologiaRichiesta) {
    error.tipologiaRichiesta = `Il motivo della richiesta è obbligatorio!`; 
  }

  if (!ufficio) {
    error.ufficio = `L'ufficio è obbligatorio!`; 
  }

  return error;
}


