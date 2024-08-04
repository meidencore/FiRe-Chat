import { updateProfile } from "firebase/auth";
import { UserInfo } from "../../../../types/UserInfo";
import { IDatabase } from "../../../auth/interfaces/IDatabase";
import { UserUpdates } from "../../../auth/types/Auth";
import { auth, db } from "../firebase.config";
import { setDoc, doc, updateDoc } from "firebase/firestore";

// TODO TryCatch and error handling

export class FirebaseDatabase implements IDatabase {

    public async createUserCollection(user: UserInfo): Promise<string> {

        const { uid, displayName, email, photoURL } = user

        await setDoc(doc(db, "users", uid), {
            uid,
            displayName,
            email, 
            photoURL
        })

        await setDoc(doc(db, "userChats", uid), {

        })

        return uid

    }

    public async updateUserById(uid: string, updates: UserUpdates) {
    
        const { displayName } = updates
        
        // to keep sync the updates to the database with the authentication firebase data
        if (auth.currentUser) updateProfile(auth.currentUser, { displayName })

        const userRef = doc(db, "users", uid);

        await updateDoc(userRef, {
            displayName
        }); 

        return uid
    }

}
