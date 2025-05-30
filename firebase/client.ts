// Import Firebase app and analytics
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import Firebase auth
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-SEliYpCTCAh7qMNm10qCZvzRaH7Jh9U",
  authDomain: "mockdesk-ecadd.firebaseapp.com",
  projectId: "mockdesk-ecadd",
  storageBucket: "mockdesk-ecadd.firebasestorage.app",
  messagingSenderId: "1015098944273",
  appId: "1:1015098944273:web:3c119bcd87e22d335d7ab0",
  measurementId: "G-4M95TYRRCD",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
