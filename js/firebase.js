<script src="https://www.gstatic.com/firebasejs/4.5.1/firebase.js"></script>

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB5LbLdu8XV3B9roITzq5TUV801iWUc7bg",
    authDomain: "chappter-1832.firebaseapp.com",
    databaseURL: "https://chappter-1832.firebaseio.com",
    projectId: "chappter-1832",
    storageBucket: "",
    messagingSenderId: "428772602463"
};
firebase.initializeApp(config);

// Phone authorization
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  });

  var phoneNumber = document.getElementById("phone-number");
  var appVerifier = window.recaptchaVerifier;
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      }).catch(function (error) {
        // Error; SMS not sent
        // ...
      });

      grecaptcha.reset(window.recaptchaWidgetId);
      
      // Or, if you haven't stored the widget ID:
      window.recaptchaVerifier.render().then(function(widgetId) {
        grecaptcha.reset(widgetId);
      }