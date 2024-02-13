// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzn1hGdgUZt8QmF7cAQmVIGKCioAo6-Xc",
  authDomain: "netflixgpt-352e2.firebaseapp.com",
  projectId: "netflixgpt-352e2",
  storageBucket: "netflixgpt-352e2.appspot.com",
  messagingSenderId: "1030524039387",
  appId: "1:1030524039387:web:2bf2d89fda3bb09efb9cfe",
  measurementId: "G-YBHDHR1EXF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
