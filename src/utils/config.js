import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfigure  = {
  apiKey: "AIzaSyBsLL_okAEO1oWGuGRZnkBfXk4F3kHS07Q",
  authDomain: "gopi-7e218.firebaseapp.com",
  projectId: "gopi-7e218",
  storageBucket: "gopi-7e218.firebasestorage.app",
  messagingSenderId: "966555919085",
  appId: "1:966555919085:web:7afb7240878fc31fd7e2e4",
  measurementId: "G-5L7LRL5EV5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfigure);
export const auth = getAuth(app);
// sign in with google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: 'bitsathy.ac.in',
  });
  signInWithRedirect(auth, provider)
    .then((_) => {})
    .catch((_) => {});
};
// firebase firestore
export const firestore = getFirestore(app);
// export const firestore = '';
export const firestoreDoc = (path) => doc(firestore, ...path);
export const firestoreGetDocs = (path, queries) => {
  return getDocs(query(collection(firestore, ...path), where(...queries)));
};
export const firestoreUpdateDoc = (path, data) =>
  updateDoc(doc(firestore, ...path), data);
export const firestoreSetDoc = (data, path) => setDoc(path, data);
export const firestoreAddDoc = (path, data) => {
  return addDoc(collection(firestore, path), data);
};
// firebase storage
export const storage = getStorage(app);