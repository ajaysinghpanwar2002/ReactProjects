import React from 'react'
import { Link } from "react-router-dom"
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth"

function Navbar() {

    const signUserOut = async () => {
        await signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <div>
                {user && (
                    <>
                        <p> {user?.displayName} </p>
                        <img src={user?.photoURL || ""} alt="ajay" width="100" height="100" border-radius = "50%"/>
                        <button onClick={signUserOut}>Sign Out</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar