// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd6NGZV3I3g-pZyMQ9RjWe7zYhV9nERbc",
  authDomain: "chat-live-47e31.firebaseapp.com",
  projectId: "chat-live-47e31",
  storageBucket: "chat-live-47e31.appspot.com",
  messagingSenderId: "22458825239",
  appId: "1:22458825239:web:f6ec03cb749e15739b3a52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);