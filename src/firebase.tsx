import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8AWEff_m2eJfIN_e9HMvKUYkZe8StDKk",
  authDomain: "netflix-clone-aa836.firebaseapp.com",
  projectId: "netflix-clone-aa836",
  storageBucket: "netflix-clone-aa836.appspot.com",
  messagingSenderId: "873107014202",
  appId: "1:873107014202:web:097c23f10be8241e7cab03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
