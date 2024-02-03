import { addDoc, collection, onSnapshot, serverTimestamp, query, where, orderBy, getDocs, getDoc, doc } from 'firebase/firestore'
import { auth, db} from '../firebaseConfig.js'
import { cookies } from './handleAuth.js'
import { messages } from '../mocks/mocks.js'

export async function createChatRoom (name, description) {

    const collectionRef = collection(db, 'chatrooms')

    try {
        const response = await addDoc(collectionRef, {
            name,
            description,
            createdAt: serverTimestamp(), 
            owner: auth.currentUser.displayName,
            users: [auth.currentUser.displayName]
        })

        const messagesSubCollectionRef =  collection(db, 'chatrooms', response.id, 'messages')

        await addDoc(messagesSubCollectionRef, {})
        // createdAt: serverTimestamp()

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

export async function getChatRoom () {

    const displayName = cookies.get('displayName')
    const collectionRef = collection(db, 'chatrooms')

    //create the query
    const queryChatRooms = query(collectionRef, where("users", "array-contains", displayName))

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

