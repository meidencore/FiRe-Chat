import React from 'react'
import { auth, provider } from '../firebaseConfig.js'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const Auth = ({ setIsAuth }) => {
    
    const handleSignIn = async () => {
        try {
        const result = await signInWithPopup( auth, provider )
        cookies.set('auth-token', result.user.refreshToken)
        setIsAuth(true)
        } catch {
            console.error
        }
    }

    const handleSignOut = async () => {

    }

  return (
    <div>
        <p className='text-gradient'>Sign in with Google</p>
        <button onClick={handleSignIn} >Sign in</button>
    </div>
  )
}

export default Auth