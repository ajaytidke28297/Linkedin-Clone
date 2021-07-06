import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3nLmixqcR9Oqr8qDSXSSc_T9TQQ5YqNQ",
  authDomain: "linkedin-clone-1328.firebaseapp.com",
  projectId: "linkedin-clone-1328",
  storageBucket: "linkedin-clone-1328.appspot.com",
  messagingSenderId: "668764894260",
  appId: "1:668764894260:web:4e66d40413b50fbd778661",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
