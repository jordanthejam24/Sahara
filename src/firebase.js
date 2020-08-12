import firebase from "firebase";
//connects firebase to our react
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwrccHPR11e_u733u57GwnM-0aj7gdBNA",
    authDomain: "sahara-2258f.firebaseapp.com",
    databaseURL: "https://sahara-2258f.firebaseio.com",
    projectId: "sahara-2258f",
    storageBucket: "sahara-2258f.appspot.com",
    messagingSenderId: "872175240454",
    appId: "1:872175240454:web:d75317974df74cec58ca87",
    measurementId: "G-5HTYH2LF1G"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };


