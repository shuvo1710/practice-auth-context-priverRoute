// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD09N69wYm77lt9pVskXquiAJpiV_UfgYA",
  authDomain: "practice-auth-context-privet.firebaseapp.com",
  projectId: "practice-auth-context-privet",
  storageBucket: "practice-auth-context-privet.appspot.com",
  messagingSenderId: "785301985885",
  appId: "1:785301985885:web:7164b4b28ebbedeff28bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;