import axios from 'axios';

const asyncValidate = (values /*, dispatch */) => {

   const apiURL = 'http://localhost:3050/';

   let promise =  axios.post(apiURL, {
          iban: values.iban
        });

  return promise.then(response => { 
            if(!response.data.valid) {
              let errMsg = { iban: 'IBAN should be valid' };
              throw errMsg;
            }
        },error => { 
              let errMsg = { iban: 'Service unavilable' };
              throw errMsg;
        });
};

export default asyncValidate;
