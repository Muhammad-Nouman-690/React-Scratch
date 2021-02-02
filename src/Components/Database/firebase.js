import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA-zbUhbAtaCxGLTcqG8kC38TnklEg23WQ",
    authDomain: "cupid-5dc86.firebaseapp.com",
    projectId: "cupid-5dc86",
    storageBucket: "cupid-5dc86.appspot.com",
    messagingSenderId: "952985242737",
    appId: "1:952985242737:web:057cebc6e251f03dfa9fd0",
    measurementId: "G-43Q5WPR0XT"
  };
  // Initialize Firebase
export default  firebase.initializeApp(firebaseConfig);
