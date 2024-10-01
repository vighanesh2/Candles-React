import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyA7BPiug7hxdhaotXYXN6hmTuKuaGYvtJE",
  authDomain: "candles-c845b.firebaseapp.com",
  projectId: "candles-c845b",
  storageBucket: "candles-c845b.appspot.com",
  messagingSenderId: "717359934279",
  appId: "1:717359934279:web:3056184b75704073b47a62",
  measurementId: "G-L4F2TQY9JB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 

export { db }; 
