// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9_J01PrDJBx2JR7NyB9CcjeRUz4WHMiM",
  authDomain: "shopping-list-484d2.firebaseapp.com",
  projectId: "shopping-list-484d2",
  storageBucket: "shopping-list-484d2.appspot.com",
  messagingSenderId: "159872645147",
  appId: "1:159872645147:web:91547bc71c1048ed4d20be",
  measurementId: "G-82CX85TZT3",
  databaseURL: "https://shopping-list-484d2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase Authentication and get a reference to the service

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export {auth}

