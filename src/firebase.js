// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCviWBZTZwmlf2EV_NsoNbcWqs4Cigkoeg",
  authDomain: "star-one-web-120f0.firebaseapp.com",
  projectId: "star-one-web-120f0",
  storageBucket: "star-one-web-120f0.appspot.com",
  messagingSenderId: "491236199343",
  appId: "1:491236199343:web:97d2d445fd689bcf0c3d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export default app
