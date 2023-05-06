import firebase from 'firebase/';


const firebaseConfig = {
    apiKey: "AIzaSyA66J_5stYatUjwQdF70q1xOFMl00tSU1s",
    authDomain: "disney-clone-37157.firebaseapp.com",
    projectId: "disney-clone-37157",
    storageBucket: "disney-clone-37157.appspot.com",
    messagingSenderId: "568853905102",
    appId: "1:568853905102:web:23d03fdb586791ae2eda9f",
    measurementId: "G-CRPZ2F9C1X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export{auth, provider, storage};
  export default db;