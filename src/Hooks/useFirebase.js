import { useEffect, useState } from 'react';
import initAuth from '../Firebase/init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



initAuth()

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleGoogleSign = () => {


        setIsLoading(true);

        return signInWithPopup(auth, provider)

    }



    const signOutt = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }



    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }





    const signUpp = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                const newUser = result.user
                newUser.displayName = name
                setUser(newUser)
            })
            .catch((error) => {
                setError(error.message)
            });
    }


    const loggIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            }
            setIsLoading(false);
        });
    }, [])



    return {
        handleGoogleSign, user, error, signOutt, handleName, handleEmail, handlePass, signUpp, loggIn, isLoading
    }
};

export default useFirebase;