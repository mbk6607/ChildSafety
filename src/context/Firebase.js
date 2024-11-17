import {createContext, useContext, useState} from "react";
import {initializeApp} from "firebase/app"
import {getAuth, signOut} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAwQSfUWFNcS87tSLRs9O2ugnNEd4rc1YA",
    authDomain: "child-safety-34d61.firebaseapp.com",
    projectId: "child-safety-34d61",
    storageBucket: "child-safety-34d61.appspot.com",
    messagingSenderId: "813900791379",
    appId: "1:813900791379:web:29fce4a7b2b6301518d0a6",
    measurementId: "G-KL019KTSPC",
    databaseURL: "https://child-safety-34d61-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const FirebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(FirebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) =>{
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const logOut = () => signOut(firebaseAuth)

    return(
        <FirebaseContext.Provider value={{loginUser, logOut, firebaseAuth}}>
            {props.children}
        </FirebaseContext.Provider>
    )

}