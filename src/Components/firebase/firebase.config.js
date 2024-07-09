// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmKJpxBzu09651nWIYEDi_Oego_hY9rj8",
  authDomain: "attendance-sheet-5bf44.firebaseapp.com",
  projectId: "attendance-sheet-5bf44",
  storageBucket: "attendance-sheet-5bf44.appspot.com",
  messagingSenderId: "716125416383",
  appId: "1:716125416383:web:0d29c49ba826e7bf250f0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
