import { useEffect } from "react";

export default function FacebookAuth() {

  function handleFacebookLogin() {
    window.FB.login((response) => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        // Send the access token to your Django backend to register the user
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'public_profile,email'});
  }
  
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : 'your-app-id',
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
      });
        
      window.FB.AppEvents.logPageView();   
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <button onClick={handleFacebookLogin}>Facebook Login</button>
  );
}
