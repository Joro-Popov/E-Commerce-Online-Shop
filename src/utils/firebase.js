import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKLN1UsJOFe9GK7xOJWaf5ulz7q_RzEds",
  authDomain: "online-shop-db-577b9.firebaseapp.com",
  projectId: "online-shop-db-577b9",
  storageBucket: "online-shop-db-577b9.appspot.com",
  messagingSenderId: "415703370129",
  appId: "1:415703370129:web:237fe6ce6a2724e47bf230",
  measurementId: "G-F387727QPE",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ propmpt: "select_account" });

export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
