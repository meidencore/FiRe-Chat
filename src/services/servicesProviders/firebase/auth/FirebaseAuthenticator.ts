import { IAuthenticator } from "../../../interfaces/IAuthenticator";
import { RegisterData, LoginCredentials} from "../../../types/Auth";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { UserInfo } from "../../../../types/UserInfo";

export class FirebaseAuthenticator implements IAuthenticator {
    
    public async register(registerData: RegisterData): Promise<UserInfo> {
    
        const { email, password } = registerData

        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return userCredential.user
            
    }

    public async login(loginCredentials: LoginCredentials): Promise<UserInfo> {

        const { email, password } = loginCredentials

        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return userCredentials.user

    }
    
    public async logout(): Promise<void> {
        
        signOut(auth) 
    
    }

    public onChangeAuthenticacionStatus(callback: (user: UserInfo | null ) => void): void {
        
        onAuthStateChanged(auth, callback)   

    }
}
