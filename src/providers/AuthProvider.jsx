import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";

export const  AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true);

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email, password)
    }

    const signOut= () =>{
        setLoading(true);
        return signOut(auth)

    }

    useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user is', setUser);
            setLoading(false);
        })

        return()=>{
            return unsubscribe();
        }
    
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signOut,




    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;