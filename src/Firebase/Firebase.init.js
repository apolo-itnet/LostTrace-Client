// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM_ca568NQFcAta4jDo0nuZ-nS6p5XJUc",
  authDomain: "lost-trace.firebaseapp.com",
  projectId: "lost-trace",
  storageBucket: "lost-trace.firebasestorage.app",
  messagingSenderId: "506352081367",
  appId: "1:506352081367:web:024f105b30274e3607d392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)