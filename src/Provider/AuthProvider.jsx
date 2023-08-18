/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //   console.log("user is :-", user);

  //Create User
  const createUser = async (email, password, name, photoUrl) => {
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Only proceed if user account creation is successful
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoUrl,
      });

      await sendEmailVerification(userCredential.user);

      return userCredential;

      //  console.log("The UserCredentail is :-",userCredential);
    } catch (error) {
      throw error;
    }
  };

  //Log In
  const Login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Log Out
  const Logout = () => {
    return signOut(auth);
  };

  //User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
        //  console.log("The currentUse is :-", currentUser);
      } else {
        setUser(null);
        setLoading(false)
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    Login,
    Logout,
    user,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
