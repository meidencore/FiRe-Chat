import { UserInfo } from "../../../../types/UserInfo";
import { IDatabase } from "../../../auth/interfaces/IDatabase";
import { db } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";

// TODO TryCatch and error handling

export class FirebaseDatabase implements IDatabase {

    public async createUserCollection(user: UserInfo): Promise<boolean> {

        const { uid, displayName, email, photoURL } = user

        await setDoc(doc(db, "users", uid), {
            uid,
            displayName,
            email, 
            photoURL
        })

        await setDoc(doc(db, "userChats", uid), {

        })

        return true

    }

}
