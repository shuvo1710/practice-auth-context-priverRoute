import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const createuser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(true)
            
        })
        return ()=>unSubscribe();
        
    }
    ,[])

    const userInfo = {user, createuser, signinUser, logOut,loading};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;