import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADt2z2z8kHMnINvQtBX3xae3_RQzhkAzE",
  authDomain: "hotel-book-9f77f.firebaseapp.com",
  projectId: "hotel-book-9f77f",
  storageBucket: "hotel-book-9f77f.firebasestorage.app",
  messagingSenderId: "643098940420",
  appId: "1:643098940420:web:c0bfa80e3739943f191151",
  measurementId: "G-79VFKX3LG1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
