// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3cScIqEnzYoqDn8YHLOqqcyT113shXUU",
  authDomain: "washhub-bb001.firebaseapp.com",
  projectId: "washhub-bb001",
  storageBucket: "washhub-bb001.appspot.com",
  messagingSenderId: "290110239454",
  appId: "1:290110239454:web:0bdefeae9a8fa42321c84f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);