import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWu5kLFh8rpepjOrrDXvG8nA9I5v6SZGM",
  authDomain: "instagram-clone-e7777.firebaseapp.com",
  databaseURL: "https://instagram-clone-e7777.firebaseio.com",
  projectId: "instagram-clone-e7777",
  storageBucket: "instagram-clone-e7777.appspot.com",
  messagingSenderId: "39322115611",
  appId: "1:39322115611:web:649a95dae920fee8cf62be",
  measurementId: "G-XKNGX2NZ2T",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
