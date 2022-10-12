import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGCj4IQlvoun0_McdpoY9CiLh8Ua05G_s",
  authDomain: "codepocket-4161f.firebaseapp.com",
  databaseURL: "https://codepocket-4161f-default-rtdb.firebaseio.com",
  projectId: "codepocket-4161f",
  storageBucket: "codepocket-4161f.appspot.com",
  messagingSenderId: "811053710127",
  appId: "1:811053710127:web:3b6f32b200448281baffda",
  measurementId: "G-RBVPDVVRZV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
