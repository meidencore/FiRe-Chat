import { updateProfile } from "firebase/auth";
import { UserInfo } from "../../../../types/UserInfo";
import { IDatabase } from "../../../interfaces/IDatabase";
import { UserUpdates } from "../../../types/Auth";
import { adminChatId, auth, db } from "../firebase.config";
import { setDoc, doc,query, collection, updateDoc, where, getDocs } from "firebase/firestore";

// TODO TryCatch and error handling

export class FirebaseDatabase implements IDatabase {

    public async createUserCollection(user: UserInfo): Promise<string> {

        // UserInfo is a subset of the User of Firebase, this is only to save in DB this properties
        const { uid, photoURL, phoneNumber, providerId, displayName, email } = user

        await setDoc(doc(db, "users", uid), {
            uid,
            photoURL,
            phoneNumber,
            providerId,
            displayName,
            email
        })
        const userChatRef = collection(db, "users", uid, "chats")
        await setDoc(doc(userChatRef, adminChatId), {
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

    public async getUsersByName(name: string): Promise<UserInfo[] | null> {

        const q = query(collection(db, "users"), where("displayName", "==", name));

        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
            return null
        } 

        const users: UserInfo[] = []
        querySnapshot.forEach((doc) => {
            users.push(doc.data() as UserInfo)
        }); 

        return users
    }       

}
