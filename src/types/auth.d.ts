export type RegisterProps = {
    username: string
    email: string
    password: string
    file?: File
}

export type RegisterSuccess = {
    _t: "register_success"
    user:User
}

export type RegisterFail = {
    _t: "register_fail"
    error:any
}

export type UploadPictureSuccess = {
    _t: "upload_success"
    photoURL: string
}

export type UploadPictureFail = {
    _t: "upload_fail"
    error: any
}

export type RegisterReturn = {
    user?: User
    registerError?: string
    uploadImageError?: string
    registerNewUser(newUser: RegisterProps): void
}

export type AuthCredentials = {
    email: string
    password: string
}