import { createUserWithEmailAndPassword, type User } from 'firebase/auth'
import { auth } from '../utils/firebase.config'

type AuthCredentials = {
    email: string,
    password: string,
}


export async function registerUser ({ email, password }: AuthCredentials): Promise<User | any > {
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email , password)
        const { user } = userCredential
        return user
    } catch (error: any) {
        return error
    }
  }
