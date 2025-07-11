import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDZCSP5A2EpqYlJLp9UMlVuaAsp4Kt8_A8",
  authDomain: "netflix-clone-6aaaa.firebaseapp.com",
  projectId: "netflix-clone-6aaaa",
  storageBucket: "netflix-clone-6aaaa.firebasestorage.app",
  messagingSenderId: "370907236800",
  appId: "1:370907236800:web:aadff0aed1346222b06025",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
    toast.error(error.code);
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, login, signup, logout };
