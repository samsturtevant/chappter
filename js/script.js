bootstrap.js

document.getElementById("fb-auth-button").addEventListener("click", function() {
    firebase.auth().signInWithRedirect(provider);
});