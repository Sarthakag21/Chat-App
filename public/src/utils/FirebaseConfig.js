import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD-xsv3UoJNr8auP128Pp-Y4yDfR5pAq4Y",
  authDomain: "chat-app-cd54f.firebaseapp.com",
  projectId: "chat-app-cd54f",
  storageBucket: "chat-app-cd54f.appspot.com",
  messagingSenderId: "916600443997",
  appId: "1:916600443997:web:ad11cf17eda057097a69b4",
  measurementId: "G-HK2F3P34XG",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)