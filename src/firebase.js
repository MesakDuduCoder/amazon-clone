
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBnPnueurRUhPbX_zwflrNba1omoiSl57Q",
  authDomain: "clone-938f6.firebaseapp.com",
  projectId: "clone-938f6",
  storageBucket: "clone-938f6.appspot.com",
  messagingSenderId: "276970748569",
  appId: "1:276970748569:web:00287e1131b5be59695608",
  measurementId: "G-DJRFECT4K5"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
export {db, auth};







