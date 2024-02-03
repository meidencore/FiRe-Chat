import { auth, provider } from '../firebaseConfig.js'
import { signInWithPopup, signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'

export const cookies = new Cookies()

export async function handleAuth () {

    try {
        const result = await signInWithPopup( auth, provider )
        cookies.set('auth-token', result.user.refreshToken)
        cookies.set('displayName', result.user.displayName)
        return true
    } catch (err) {
        console.error(err)
        return false
    }

} 

export async function handleSignOut () {

    try {
        await signOut(auth)
        cookies.remove('auth-token')
        return true
    } catch (err){
        console.error(err)
        return false
    }
    
} 