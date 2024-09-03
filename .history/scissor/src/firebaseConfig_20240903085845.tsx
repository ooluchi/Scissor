 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTR100uCm0Y6IAYIEtcVJgaccoc8VneaI",
  authDomain: "scissor-d9f0b.firebaseapp.com",
  projectId: "scissor-d9f0b",
  storageBucket: "scissor-d9f0b.appspot.com",
  messagingSenderId: "269561949757",
  appId: "1:269561949757:web:10d0cda9981ba572de4454",
  measurementId: "G-ERDG5CFE5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);