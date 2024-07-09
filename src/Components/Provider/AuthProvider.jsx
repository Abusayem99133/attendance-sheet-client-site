import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const createUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
