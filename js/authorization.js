 //Notification elements
 var errorNotification = document.getElementById('errorMessage'),
 greetingDiv = document.getElementById('greetings-container'),
 greetingNotification = document.getElementById('greetings');

 //Registration elements
 var registerConteiner = document.getElementById('registration-container'),
 registerLogin = document.getElementById('register_login'),
 registerPassword = document.getElementById('register_password'),
 confirmationPassword = document.getElementById('register_confirmation'),
 registerButton = document.getElementById('register');

 //Log in elements
 var authConteiner = document.getElementById('auth-container'),
 authLogin = document.getElementById('auth_login'),
 authPassword = document.getElementById('auth_password'),
 authButton = document.getElementById('auth');

 var logOutButton = document.getElementById('log_out');
 var sidebarFeatures = document.getElementsByClassName('sidebar_feature');

  // Initialize Firebase
 var config = {
     apiKey: "AIzaSyBIzTEO7x10IwEY2ntf5PZPwFrb9cV-KdA",
     authDomain: "task3-1bb09.firebaseapp.com",
     databaseURL: "https://task3-1bb09.firebaseio.com",
     projectId: "task3-1bb09",
     storageBucket: "task3-1bb09.appspot.com",
     messagingSenderId: "1082794102443"
 };
 
 firebase.initializeApp(config);

 function logInUI() {
     var storage = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBIzTEO7x10IwEY2ntf5PZPwFrb9cV-KdA:[DEFAULT]'));
     var userEmail = storage.email;
     errorNotification.style.display = 'none';
     authConteiner.style.display = 'none';
     registerConteiner.style.display = 'none';
     greetingDiv.style.display = 'block';
     greetingNotification.innerHTML = "Hello, " + userEmail;
    for (var i = 0; i < sidebarFeatures.length; i++) {
        sidebarFeatures[i].removeAttribute("disabled");
    }
 } 

 function logOutUI() {
     greetingDiv.style.display = 'none';
     greetingNotification.innerHTML = "";
     errorNotification.innerHTML = "";
     errorNotification.style.display = 'block';
     authConteiner.style.display = 'block';
     registerConteiner.style.display = 'block';
     for (var i = 0; i < sidebarFeatures.length; i++) {
        sidebarFeatures[i].setAttribute("disabled", "true");
    }
 } 

 if (localStorage.length > 0) {
     logInUI();
 } else if (localStorage.length < 1) {
     logOutUI();
 }            

 registerButton.addEventListener( 'click', function() {
     if( registerPassword.value != '' && registerPassword.value === confirmationPassword.value ) {
         firebase.auth().createUserWithEmailAndPassword(registerLogin.value, registerPassword.value).catch(function(error) {
         var errorMessage = error.message;  
         errorNotification.innerHTML = errorMessage;
         });    
     } else {
         errorNotification.innerHTML = 'Password confirmation is failed';
     }
     var user = firebase.auth().currentUser;
     firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
             logInUI();
         } else {
             console.log('User is signed out');
         }
     });
 } );

 authButton.addEventListener( 'click', function() {
     firebase.auth().signInWithEmailAndPassword(authLogin.value, authPassword.value).catch(function(error) {
         var errorMessage = error.message;
         errorNotification.innerHTML = errorMessage;
         });

     var user = firebase.auth().currentUser;
     firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
             // User is signed in.
             logInUI();
         } else {
             console.log('User is signed out');
         }
     });
 } )

 logOutButton.addEventListener( 'click', function() {
     firebase.auth().signOut().then(function() {
         logOutUI();
     }).catch(function(error) {
         console.log('Error');
     });
 })
