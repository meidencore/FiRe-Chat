import { User, updateProfile } from "firebase/auth";

export type UserUpdates = {
    displayName?: string,
    photoURL?: string,
}
export function updateUser (user: User, updates: UserUpdates) {
    updateProfile(user, {...updates})
}
