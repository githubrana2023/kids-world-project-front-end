import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  /**
   * ?==============================================================================================================================
   * ?                                                        Hooks & variables
   * ?==============================================================================================================================
   */
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [loading , setLoading]= useState(true)




  /**
   * ?==============================================================================================================================
   * ?                                           login and register with logout functionality
   * ?==============================================================================================================================
   */

  const loginWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth)
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  },[]);

  const authInfo = {
    user,
    auth,
    loginWithEmailPassword,
    registerWithEmailPassword,
    logOut,
    loginWithGoogle,
    loginWithGithub,
    setUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
