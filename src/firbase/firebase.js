// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgRDNZYzOqMUt5d5hX_7Cfdup39nVvJ3g",
  authDomain: "ema-john-simple-with-fir-a29b0.firebaseapp.com",
  projectId: "ema-john-simple-with-fir-a29b0",
  storageBucket: "ema-john-simple-with-fir-a29b0.appspot.com",
  messagingSenderId: "805749420584",
  appId: "1:805749420584:web:88dc960be47d04327f7b1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app