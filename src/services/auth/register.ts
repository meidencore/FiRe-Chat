import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase.config'
import { AuthCredentials, RegisterFail, RegisterSuccess } from '../../types/auth'

export async function registerUser ({ email, password }: AuthCredentials): Promise<RegisterSuccess | RegisterFail> {
    
    try 
    {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = userCredential
        return {
            _t:"register_success",
            user
        }
    } 
    catch (error) 
    {   
        return {
            _t: "register_fail",
            error
        }
  }
}