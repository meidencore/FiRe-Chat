import { User, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { UserUpdates } from "../../types/auth";

export function updateUser (user: User, updates: UserUpdates) {
    updateProfile(user, {...updates})
}

export async function createUserInDb ({uid, displayName, email, photoURL}: User) {
    await setDoc(doc(db, "users", uid), {
        uid,
        displayName,
        email, 
        photoURL
    })
    await setDoc(doc(db, "userChats", uid), {

    })
}