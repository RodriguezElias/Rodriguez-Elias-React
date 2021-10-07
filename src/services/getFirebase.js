import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBf4aArPvd7bARigOg1T3zU2dq2Fj-66oA",
  authDomain: "lero-9025b.firebaseapp.com",
  projectId: "lero-9025b",
  storageBucket: "lero-9025b.appspot.com",
  messagingSenderId: "54911724568",
  appId: "1:54911724568:web:3a2617876c61a3ed1c676d"
};

const app = firebase.initializeApp(firebaseConfig)


export function getFirestore(){
  return firebase.firestore(app)
}