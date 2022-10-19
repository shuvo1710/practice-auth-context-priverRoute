import { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName:'ami'})
    const createuser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {user, createuser, signinUser};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;