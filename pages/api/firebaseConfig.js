import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBbLm6NxKU6JGH0X42FvNl3AbIFT8mxGtM",
  authDomain: "febracis-lisbon.firebaseapp.com",
  databaseURL: "https://febracis-lisbon-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "febracis-lisbon",
  storageBucket: "febracis-lisbon.appspot.com",
  messagingSenderId: "156370211477",
  appId: "1:156370211477:web:3325e119410c792cdc819c",
  measurementId: "G-TPDYKVJ2R9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};
