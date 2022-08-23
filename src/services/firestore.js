// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const firestoreBD = getFirestore(app)

export default firestoreBD;