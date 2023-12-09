// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mrem-2d51d.firebaseapp.com",
  projectId: "mrem-2d51d",
  storageBucket: "mrem-2d51d.appspot.com",
  messagingSenderId: "328091813833",
  appId: "1:328091813833:web:c8ae0ac0e8a47542318a18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);