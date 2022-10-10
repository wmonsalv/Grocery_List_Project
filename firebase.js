// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/database";


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

// Initialize Firebase
let app
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);  //this initializes app with the firebase config from above
} else{                                          //if the app has not been initialized, meaning that app length > 0 ,then 
  app = firebase.app()
}

const auth = firebase.auth()
//const database = firebase.database();

// function writeUserData(name, list) {
//   firebase.database().ref('Lists/' + name).set({
//     shoppingList: list
//   });
// }

// let myList = [
//   {key: Math.random(),
//   text: "chicken",
//   completed: false}, 
//   {key: Math.random(),
//     text: "Cheese",
//     completed: false}, ]

//   let xmasList = [
//       {key: Math.random(),
//       text: "Ham",
//       completed: false}, 
//       {key: Math.random(),
//         text: "pie",
//         completed: false}, ]

// writeUserData("summer", myList);
// writeUserData("Xmas", myList);


export {auth}

