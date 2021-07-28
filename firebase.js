import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkCM2JliLNwAxPXaHUgGZb7OaEh-RpLow",
  authDomain: "signal111.firebaseapp.com",
  projectId: "signal111",
  storageBucket: "signal111.appspot.com",
  messagingSenderId: "773409883183",
  appId: "1:773409883183:web:4ad209e119e70dbfaf32da"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
