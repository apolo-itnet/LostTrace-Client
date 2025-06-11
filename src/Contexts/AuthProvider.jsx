import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContexts";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authContextValue = {
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    user,
    logOut,
  };

  return <AuthContext value={authContextValue}>{children}</AuthContext>;
};

export default AuthProvider;
