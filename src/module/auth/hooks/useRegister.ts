import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { registerUser } from "../../../services/auth/register";
import { UserUpdates, updateUser } from "../../../services/auth/user";
import { uploadProfilePicture } from "../../../services/auth/image";
import { RegisterProps, RegisterReturn } from "../../../types/auth";
import { FirebaseError } from "firebase/app";

export function useRegister(): RegisterReturn {

    const [user, setUser] = useState<User>()
    const [formData, setFormData] = useState<RegisterProps>()
    const [registerError, setRegisterError] = useState<string>()
    const [uploadImageError, setUploadImageError] = useState<string>()

    /// Register User
    async function registerNewUser(newUser : RegisterProps) {
        setFormData(newUser)
        const { email, password } = newUser
        // TODO Validate password and email first
        const response = await registerUser({email, password})
        if (response._t === "register_success")
        {
            const { user } = response
            setUser(user)
        }
        else
        {
            const { error } = response
            error instanceof FirebaseError ? 
                setRegisterError(response.error.code)
                : 
                setRegisterError(response.error.message) 
        }    
    }

    useEffect(() => {
        if (!user) return

        const updates: UserUpdates = {
            displayName: formData?.username,
        }
        if (formData?.file) 
        {   
            try {
                updates.photoURL = uploadProfilePicture(user, formData.file)
            } catch (error: any) {
                setUploadImageError(error)     
            }
        }      
        updateUser(user, updates)
    /// eslint-disable-next-line react-hooks/exhaustive-deps
    },[user, formData])

    return {
        user,
        registerError,
        uploadImageError,
        registerNewUser,
    }
}