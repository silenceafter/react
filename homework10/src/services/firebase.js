import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAD0ZBrQdoWJ9XS0r2MKfe53FDsm3QdLZ8",
    authDomain: "silenceafter-34cb3.firebaseapp.com",
    projectId: "silenceafter-34cb3",
    storageBucket: "silenceafter-34cb3.appspot.com",
    messagingSenderId: "912193538246",
    appId: "1:912193538246:web:2ce64d34acecf98881afc7"
  };
  
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
export { firebase_app };