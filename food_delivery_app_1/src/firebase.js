/* eslint-disable comma-dangle */
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhOirO5PBNory7fnOTHnDzZVRL_v3mThw",
  authDomain: "food-delivey-app-71f77.firebaseapp.com",
  projectId: "food-delivey-app-71f77",
  storageBucket: "food-delivey-app-71f77.appspot.com",
  messagingSenderId: "23674579254",
  appId: "1:23674579254:web:540f4faf6a5e8471c7ab97",
  measurementId: "G-VFGREDZ1NY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
