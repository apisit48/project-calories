import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCS9-dZWu8hX-A3u8k6crSKcnaZ7I6ZU3Q",
  authDomain: "iccs340-8637e.firebaseapp.com",
  projectId: "iccs340-8637e",
  storageBucket: "iccs340-8637e.appspot.com",
  messagingSenderId: "52739315675",
  appId: "1:52739315675:web:edd35e149f1f02031fb9fe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)


export{
    db,
    auth 
}