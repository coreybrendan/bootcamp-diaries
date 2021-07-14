// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPSOzRQsUm4vJYmDgDO5CphnLO_lE3RW8",
  authDomain: "bootcamp-diaries.firebaseapp.com",
  projectId: "bootcamp-diaries",
  storageBucket: "bootcamp-diaries.appspot.com",
  messagingSenderId: "974889761211",
  appId: "1:974889761211:web:47031ec515f0636add6c9e"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // export the configured version of firebase
  export default firebase;