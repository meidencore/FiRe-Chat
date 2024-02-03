import React from 'react'
import { useState } from 'react'
import { addDoc, collection, onSnapshot, serverTimestamp, query, where, orderBy } from 'firebase/firestore'
import { useEffect } from 'react'
import { auth, db } from '../firebaseConfig.js'
import Send from '../assets/send.svg'

const Chat = ({ room }) => {

  
  const messageRef = collection(db, 'messages')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (newMessage === "") return // prenvent send an empty message

    // store the text message, the time at it was created, the user and the room
    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(), 
      user: auth.currentUser.displayName,
      room,
    })

    // clean the input field
    setNewMessage("")
  }

  useEffect(() => {

    //create the query
    const queryMessages = query(messageRef, where("room", "==", room), orderBy("createdAt"))

    // extract the messages from the query
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = []
      snapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id})
      })

      // update the state with the messages grabed from the DB
      setMessages(messages)
    })

    // clean the useEffect
    return () => unsuscribe()
  },[])
  

  return (
    <section>
      <div>
        {messages.map((message) => <h1 key={message.id}>{message.text}</h1>)}
      </div>
      <form className='inline-block' onSubmit={handleSubmit}>
        <input placeholder='enter your message here...'
        onChange={(event) => setNewMessage(event.target.value)}
        value={newMessage}
        />
        <button type='submit' ><img src={Send} alt='send'/></button>
      </form>
    </section>
  )
}

export default Chat