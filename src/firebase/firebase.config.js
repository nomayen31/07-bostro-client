// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId
  apiKey: "AIzaSyAtBm8MqPWbzRGQTrhfOXvFK4luJFWc8n8",
  authDomain: "bistro-boss-ee98a.firebaseapp.com",
  projectId: "bistro-boss-ee98a",
  storageBucket: "bistro-boss-ee98a.appspot.com",
  messagingSenderId: "830584177860",
  appId: "1:830584177860:web:d554ca555f2b2bd527f591"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
