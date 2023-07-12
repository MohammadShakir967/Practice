// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCybmXAUWgGDCMNQWvcRdaMgE31I1GkF8M",
//   authDomain: "log-in-authentication-ac1b6.firebaseapp.com",
//   projectId: "log-in-authentication-ac1b6",
//   storageBucket: "log-in-authentication-ac1b6.appspot.com",
//   messagingSenderId: "735126972855",
//   appId: "1:735126972855:web:b26c16bd1de14bf361e032",
//   measurementId: "G-3GKSESXV7S"
// };





  
  
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
 
  
  const firebaseConfig = {
    apiKey: "AIzaSyC33zHQHMQ1Z6EzEf5F1Fw7ycq7KYBQ88E",
    authDomain: "practice-f3ea5.firebaseapp.com",
    projectId: "practice-f3ea5",
    storageBucket: "practice-f3ea5.appspot.com",
    messagingSenderId: "474139669794",
    appId: "1:474139669794:web:3b2552a342a4923f09217b"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.signUp = function () {
    let email = document.getElementById( "email-signup").value
    let password = document.getElementById("password-signup").value
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  
  window.signIn = function () {
    let email = document.getElementById( "email-signup").value
    let password = document.getElementById("password-signup").value

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

// mailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const main = document.getElementById("main");
// const createacct = document.getElementById("create-acct")
// const submitButton = document.getElementById("submit");
// const signupButton = document.getElementById("sign-up");
// const e
// const signupEmailIn = document.getElementById("email-signup");
// const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
// const signupPasswordIn = document.getElementById("password-signup");
// const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
// const createacctbtn = document.getElementById("create-acct-btn");

// const returnBtn = document.getElementById("return-btn");

// var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

// createacctbtn.addEventListener("click", function() {
//   var isVerified = true;

//   signupEmail = signupEmailIn.value;
//   confirmSignupEmail = confirmSignupEmailIn.value;
//   if(signupEmail != confirmSignupEmail) {
//       window.alert("Email fields do not match. Try again.")
//       isVerified = false;
//   }

//   signupPassword = signupPasswordIn.value;
//   confirmSignUpPassword = confirmSignUpPasswordIn.value;
//   if(signupPassword != confirmSignUpPassword) {
//       window.alert("Password fields do not match. Try again.")
//       isVerified = false;
//   }
  
//   if(signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
//     window.alert("Please fill out all required fields.");
//     isVerified = false;
//   }
  
//   if(isVerified) {
//     createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
//       .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//       window.alert("Success! Account created.");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//       window.alert("Error occurred. Try again.");
//     });
//   }
// });

// submitButton.addEventListener("click", function() {
//   email = emailInput.value;
//   console.log(email);
//   password = passwordInput.value;
//   console.log(password);

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log("Success! Welcome back!");
//       window.alert("Success! Welcome back!");
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Error occurred. Try again.");
//       window.alert("Error occurred. Try again.");
//     });
// });

// signupButton.addEventListener("click", function() {
//     main.style.display = "none";
//     createacct.style.display = "block";
// });

// returnBtn.addEventListener("click", function() {
//     main.style.display = "block";
//     createacct.style.display = "none";
// });