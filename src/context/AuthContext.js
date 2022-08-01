import {useContext, createContext, useEffect, useState} from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import useLocalStorage from 'use-local-storage'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('userLogin', {})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')


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
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     const uid = user.uid;
        //     setDoc(doc(db, 'users', uid), {
        //         // the data you want to store in your document
        //         email: email,
        //         password: password,
        //         phone: phone
        //     });
        //     // now the document will have the same ID as the auth user
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        //   });
    }

    const logOut = () => {
        signOut(auth)
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const uid = user.uid;
            setDoc(doc(db, 'users', uid), {
                // the data you want to store in your document
                email: email,
                password: password,
                phone: phone
            });
            // now the document will have the same ID as the auth user
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
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
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     const uid = user.uid;
        //     setDoc(doc(db, 'users', uid), {
        //         // the data you want to store in your document
        //         email: email,
        //         password: password,
        //         phone: phone
        //     });
        //     // now the document will have the same ID as the auth user
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        //   });
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