import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmIpON9EIziHxQd05pULDUsMDkj3jV12A",
    authDomain: "fir-login-modul.firebaseapp.com",
    databaseURL: "https://fir-login-modul.firebaseio.com",
    projectId: "fir-login-modul",
    storageBucket: "fir-login-modul.appspot.com",
    messagingSenderId: "358615609212",
    appId: "1:358615609212:web:6234dd570003395ca37ef9"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;