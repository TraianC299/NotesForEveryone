import firebase from 'firebase/app'
import "firebase/auth"
//import storage
import "firebase/storage"
//import stabase
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDM6Iy6oPEkPPQrKSGQOHuPcsGdt6gvP3Y",
    authDomain: "notes-757db.firebaseapp.com",
    projectId: "notes-757db",
    storageBucket: "notes-757db.appspot.com",
    messagingSenderId: "322525739918",
    appId: "1:322525739918:web:fe2179264e203cb36342df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  //initialize storage
  const storage=firebase.storage()

  //initialize database
  const database = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {auth, storage, database, timestamp}