import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCT-andW1hyeuvSHwB3EknLnQq1ErzUF2o",
  authDomain: "discord-clone-64c40.firebaseapp.com",
  projectId: "discord-clone-64c40",
  storageBucket: "discord-clone-64c40.appspot.com",
  messagingSenderId: "578117933654",
  appId: "1:578117933654:web:bf709df5037627499ab9f7",
  measurementId: "G-CW3FS30N7Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
