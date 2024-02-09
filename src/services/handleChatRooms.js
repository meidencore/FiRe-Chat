import { addDoc, collection, onSnapshot, serverTimestamp, query, where, orderBy, getDocs, getDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { auth, db } from '../firebaseConfig.js'
import { onAuthStateChanged } from 'firebase/auth'
import { cookies } from './handleAuth.js'
import { messages } from '../mocks/mocks.js'

export async function createChatRoom (name, description) {

    const collectionRef = collection(db, 'chatrooms')

    try {
        const response = await addDoc(collectionRef, {
            name,
            description,
            createdAt: serverTimestamp(), 
            owner: signInUser.displayName,
            users: signInUser.uid
        })

        const messagesSubCollectionRef =  collection(db, 'chatrooms', response.id, 'messages')

        await addDoc(messagesSubCollectionRef, {})

        // recover from the db the new chatroom that just create
        const chatRoomRef = doc(db, 'chatrooms', response.id );
        const docSnap = await getDoc(chatRoomRef);
        const newChatRoom = {...docSnap.data(), id:docSnap.id}

        return newChatRoom

    } catch (err) {
        console.error(err)
        return false
    }

}

export async function getChatRoom (user) {

    const uid = user.uid
    const collectionRef = collection(db, 'chatrooms')

    //create the query
    const queryChatRooms = query(collectionRef, where("users", "array-contains", uid))

    try {
        // get the docs
        const querySnapshot = await getDocs(queryChatRooms)
        // push it into an array
        let chatRooms = []
        querySnapshot.forEach((doc) => {
            chatRooms.push({...doc.data(), id: doc.id})
        })
    
        return chatRooms 

    } catch(err) {
        console.log(err)
        return null
    }
}

export async function updateChatRoomUsers (id) {
   
    const docRef = doc(db, 'chatrooms', id)
    //update the document
    await updateDoc(docRef, {
        users: arrayUnion(signInUser.uid)
    })

}

export async function postMessages (currentChatRoom, message) {

    const { id } = currentChatRoom
    const messageRef = collection(db, 'chatrooms', id, 'messages')
 
    try {
    // store the text message, the time at it was created, the user and the room
    await addDoc(messageRef, {
      text: message,
      createdAt: serverTimestamp(), 
      author: auth.currentUser.displayName,
      roomId: id
    })

    return true

    } catch (err) {
        console.error(err)
        return false
    }

    
    
}

export async function getMessages (currentChatRoom, setState) {
    const { id } = currentChatRoom
    //create the query
    const messageRef = collection(db, 'chatrooms', id, 'messages')
    const queryMessages = query(messageRef, orderBy("createdAt"))

    // extract the messages from the query
    onSnapshot(queryMessages, (snapshot) => {
        let messages = []
        snapshot.forEach((doc) => {
          messages.push({...doc.data(), id: doc.id})
        })

        setState(messages)
    })
}

