
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtSXIXOy_lhrZBh0Mh87khY0oqClb093s",
  authDomain: "react-crud-85919.firebaseapp.com",
  databaseURL: "https://react-crud-85919-default-rtdb.firebaseio.com",
  projectId: "react-crud-85919",
  storageBucket: "react-crud-85919.firebasestorage.app",
  messagingSenderId: "873003444804",
  appId: "1:873003444804:web:5d62a3c20a58852e05ea11",
  measurementId: "G-PJJW2WNEJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);