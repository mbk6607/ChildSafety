import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {useFirebase} from "../context/Firebase";

export default function Protected(props){
    const { Component } = props;
    const firebase = useFirebase();
    const navigator = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebase.firebaseAuth, user =>{
            console.log(user);
            if(user !== null) {
                setUser(user.email);
            }else{
                console.log(user);
                console.log("Redirect to login")
                setUser(null)
                navigator('/')
            }
        })
    }, []);

    return (
        <Component username={user} />
    )
}