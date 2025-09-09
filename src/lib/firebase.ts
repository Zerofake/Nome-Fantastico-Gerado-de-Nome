// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-1838385078-59807",
  "appId": "1:303523227769:web:fe1d4b4554c7ea7d6acca8",
  "storageBucket": "studio-1838385078-59807.firebasestorage.app",
  "apiKey": "AIzaSyDq-bQP0NzOQTXmdoCldf3LFpk4FaSZWMo",
  "authDomain": "studio-1838385078-59807.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "303523227769"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
