import { UserInfo } from "../../../../types/UserInfo";
import { IDatabase } from "../../../auth/interfaces/IDatabase";
import { UserUpdates } from "../../../auth/types/Auth";
import { db } from "../firebase.config";
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

        const userRef = doc(db, "users", uid);

        await updateDoc(userRef, {
            displayName
        }); 

        return uid
    }

}
