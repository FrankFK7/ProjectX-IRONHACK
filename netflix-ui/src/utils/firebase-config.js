import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA5chJ1OkqK3MsM1reHMmx3MukibcaixM",
  authDomain: "react-netflix-project-a940e.firebaseapp.com",
  projectId: "react-netflix-project-a940e",
  storageBucket: "react-netflix-project-a940e.appspot.com",
  messagingSenderId: "1063348598563",
  appId: "1:1063348598563:web:45eb949ab7ec566eda3e96",
  measurementId: "G-JBRTBEKQZ9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
