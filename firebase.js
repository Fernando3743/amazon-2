import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVXobC8oQg4CIQD-1zhef__TTSQzq9y_A",
  authDomain: "fir-2db88.firebaseapp.com",
  projectId: "fir-2db88",
  storageBucket: "fir-2db88.appspot.com",
  messagingSenderId: "1014799167998",
  appId: "1:1014799167998:web:1ba4608c2e36e36fde10af",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
