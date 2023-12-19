// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhy8wDGbKBrWFfxc2njCPUocXYm5CiI1M",
  authDomain: "proyecto-final-uade.firebaseapp.com",
  projectId: "proyecto-final-uade",
  storageBucket: "proyecto-final-uade.appspot.com",
  messagingSenderId: "116235026608",
  appId: "1:116235026608:web:a40983646952a5d0917b75",
  measurementId: "G-0FZ0DCTE3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);