import {useContext, createContext, useEffect, useState} from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import useLocalStorage from 'use-local-storage'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('userLogin', {})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('USER', currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedProducts: []
        })
    }

    const signInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const setUpRecaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container', 
            {}, 
            auth
        )
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, createUser, signInEmail, setUpRecaptcha, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}