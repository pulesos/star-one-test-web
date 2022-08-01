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
    const [name, setName] = useState('')
    const [language, setLanguage] = useState('')
    const [valute, setValute] = useState('')
    const [instagram, setInstagram] = useState('')
    const [phone, setPhone] = useState('')

    const [recipient, setRecipient] = useState('')
    const [country, setCountry] = useState('')
    const [postCode, setPostCode] = useState('')
    const [town, setTown] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [apartment, setApartment] = useState('') 



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
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const uid = user.uid;
            setDoc(doc(db, 'users', uid), {
                // the data you want to store in your document
                email: email,
                name: name,
                password: password,
                phone: phone,
                language: language,
                instagram: instagram,
                valute: valute,
                recipient: recipient,
                country: country,
                postCode: postCode,
                town: town,
                street: street,
                house: house,
                apartment: apartment
            });
            // now the document will have the same ID as the auth user
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
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
                name: name,
                password: password,
                phone: phone,
                language: language,
                instagram: instagram,
                valute: valute,
                recipient: recipient,
                country: country,
                postCode: postCode,
                town: town,
                street: street,
                house: house,
                apartment: apartment
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