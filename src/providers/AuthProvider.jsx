import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const verifyEmail = (currentUser) => {
        setLoading(true);
        return sendEmailVerification(currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current user inside the auth state observer', currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);

            // if current user exists, issue a token
            if (currentUser) {
                axios.post('https://warehouse-server-zeta.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('Token response', res.data);
                    })
            }

            else {
                axios.post('https://warehouse-server-zeta.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('Token response', res.data);
                    })
            }
        })

        return () => {
            unsubscribe();
        }
    }, [user?.email]);

    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        verifyEmail

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;