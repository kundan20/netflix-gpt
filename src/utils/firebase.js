// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWn_0671ASs-v5YER_vZUqupw7nwwgSEw",
  authDomain: "netflix-gpt-d9e84.firebaseapp.com",
  projectId: "netflix-gpt-d9e84",
  storageBucket: "netflix-gpt-d9e84.appspot.com",
  messagingSenderId: "1084757067906",
  appId: "1:1084757067906:web:d122a7d1e641ee2a44cc9b",
  measurementId: "G-EX6JSXLP0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();