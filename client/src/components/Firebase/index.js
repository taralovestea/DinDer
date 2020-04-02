import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8xeRd-ZAkCIspR755uIjdV32M9DD2lo4",
    authDomain: "dinder-848ea.firebaseapp.com",
    databaseURL: "https://dinder-848ea.firebaseio.com",
    projectId: "dinder-848ea",
    storageBucket: "dinder-848ea.appspot.com",
    messagingSenderId: "276373163952",
    appId: "1:276373163952:web:01db75eb026832e0ba1075",
    measurementId: "G-1ZYR7Z5KJN"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
