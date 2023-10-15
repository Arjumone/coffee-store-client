// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQdxcRjtcVlfZx0CAAN3zQSXz5xp7I7Y",
  authDomain: "coffee-store-af5e9.firebaseapp.com",
  projectId: "coffee-store-af5e9",
  storageBucket: "coffee-store-af5e9.appspot.com",
  messagingSenderId: "929688198213",
  appId: "1:929688198213:web:71a29c73f67ea46837572c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;