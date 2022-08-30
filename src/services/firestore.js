// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import data from "../components/Data/Data";


const firebaseConfig = {
  apiKey: "AIzaSyCpEc5eTz_Y1EvxQQZggXiJX3L1xBdr9ho",
  authDomain: "funko-react.firebaseapp.com",
  projectId: "funko-react",
  storageBucket: "funko-react.appspot.com",
  messagingSenderId: "566832530741",
  appId: "1:566832530741:web:b2a85d3f5a7dc77893787c",
  measurementId: "G-QSD3YXVVH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreBD = getFirestore(app)

export async function saveProductsToFirebase(){
  const collectionFunkos = collection(firestoreBD, "funkogot");

  for (let item of data) {
    const docref = await addDoc(collectionFunkos, item);
    console.log("documento creado con id:", docref.id);
  }
}


export default firestoreBD;