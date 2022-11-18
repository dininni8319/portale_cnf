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
    error.tipologiaRichiesta = `La tipologia di richiesta è obbligatoria!`; 
  }

  if (!ufficio) {
    error.ufficio = `L'ufficio è obbligatorio!`; 
  }

  return error;
}


