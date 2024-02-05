import { auth, provider } from '../firebaseConfig.js'
import { signInWithPopup, signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'
import { updateChatRoomUsers } from './handleChatRooms.js'

export const cookies = new Cookies()

export async function handleAuth () {

    try {
        const result = await signInWithPopup( auth, provider )
        cookies.set('auth-token', result.user.refreshToken)
        cookies.set('displayName', result.user.displayName)
        // add the new user to the Global Chatroom
        updateChatRoomUsers(import.meta.env.VITE_GLOBAL_CHAT_ID)

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
        cookies.remove('displayName')
        return true
    } catch (err){
        console.error(err)
        return false
    }
    
} 