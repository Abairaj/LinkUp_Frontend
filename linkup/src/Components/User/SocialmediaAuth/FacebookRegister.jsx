import axios from "axios";


export default function FacebookRegister(accessToken) {
    axios.get(`https://graph.facebook.com/v11.0/oauth/access_token?client_id=799370817875417&client_secret=5fdbef8e1a6e036d7703569980254965&code={code}&redirect_uri={redirect_uri}
    `)
    axios.post('http://127.0.0.1:8000/socialauth/fb_register/', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_token: accessToken
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Save the token to the browser's local storage or state
    })
    .catch(error => {
      console.error(error);
    });
  }
  