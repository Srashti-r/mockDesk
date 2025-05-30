// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-SEliYpCTCAh7qMNm10qCZvzRaH7Jh9U",
  authDomain: "mockdesk-ecadd.firebaseapp.com",
  projectId: "mockdesk-ecadd",
  storageBucket: "mockdesk-ecadd.firebasestorage.app",
  messagingSenderId: "1015098944273",
  appId: "1:1015098944273:web:3c119bcd87e22d335d7ab0",
  measurementId: "G-4M95TYRRCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
