// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTQQSBYHF5Qdz-czJiHWoFvTH7TA66kCM",
  authDomain: "hitorinhasapp.firebaseapp.com",
  projectId: "hitorinhasapp",
  storageBucket: "hitorinhasapp.firebasestorage.app",
  messagingSenderId: "1012928568255",
  appId: "1:1012928568255:android:d4de49f797f1ca9dcf9f0a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

