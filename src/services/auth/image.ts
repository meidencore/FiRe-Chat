import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/firebase.config";
import { User } from "firebase/auth";
import { UploadPictureFail, UploadPictureSuccess } from "../../types/auth";


export function uploadProfilePicture ({ uid }: User, file: File): UploadPictureSuccess | UploadPictureFail {

    const storageRef = ref(storage, `profile_picture/${uid}.png`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    let response: UploadPictureSuccess | UploadPictureFail

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
    (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            console.log('Upload is running');
            break;
        }
    }, 
    (error) => {
        console.error(`[ERROR UPLOADING IMAGE]: ${error.message}`)
        return {
            _t : "upload_fail",
            error,
        }
    }, 
    async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        try {
            response._t = "upload_success"
            response.photoURL = await getDownloadURL(uploadTask.snapshot.ref)
        } catch (error) {
            response.error = error
        }
    }
    );
    
    return response
}