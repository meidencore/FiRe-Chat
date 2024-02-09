import { auth, provider, db } from '../firebaseConfig.js'
import { signInWithPopup, signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'
import { updateChatRoomUsers } from './handleChatRooms.js'
import { addDoc, collection, getDoc, setDoc, query, doc} from 'firebase/firestore'

export const cookies = new Cookies()

const usersRef = collection(db, 'users')

async function isNewUser (id) {
    let isNew = null
    let userDoc = null

    const userRef = doc(db, 'users', id)

    try {
        const res = await getDoc(userRef)
        const exist = res.exists()
        if (!exist) {
            isNew = true
        } else {
            isNew = false
            userDoc = {...res.data(), docId: res.id}
        }

    } catch (err) {
        console.error(err)  
    }
    
    return [isNew, userDoc]
}

export async function handleAuth () {

    try {

        const result = await signInWithPopup( auth, provider )
        cookies.set('auth-token', result.user.refreshToken)
        cookies.set('uid', result.user.uid)
        
        // check is the user is New
        const [isNew, userDoc] = await isNewUser(result.user.uid)

        if (isNew) {
            const userRef = doc(db, 'users', result.user.uid)
            // create the user in the DB
            await setDoc(userRef, {
                name: result.user.displayName,
                mail: result.user.email,
                avatar: result.user.photoURL,
            })
            // add the new user to the Global Chatroom
            updateChatRoomUsers(import.meta.env.VITE_GLOBAL_CHAT_ID)
        }
        return true
    } catch (err) {
        console.error(err)
        return false
    }

} 

export async function handleSignOut () {

    try {
        await signOut(auth)
        return true
    } catch (err){
        console.error(err)
        return false
    }    
} 