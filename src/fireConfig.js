import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_rA26H50nGxDwfAJ3L-eL-DD_T6mFJpc",
    authDomain: "yessinuser-ff30f.firebaseapp.com",
    projectId: "yessinuser-ff30f",
    storageBucket: "yessinuser-ff30f.appspot.com",
    messagingSenderId: "366582390368",
    appId: "1:366582390368:web:9a263d888b3c9c3e0eed05"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;