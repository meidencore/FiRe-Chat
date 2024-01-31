import React from 'react'
import { useState, useRef } from 'react'

import { auth } from '../firebaseConfig.js'
import { signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'

import Auth from '../components/Auth.jsx'
import Chat from '../components/Chat.jsx'
import FormChat from '../components/FormChat.jsx'

const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null)

  const handleSignOut = async () => {
    await signOut(auth)
    cookies.remove('auth-token')
    setIsAuth(false)
    setRoom(null)
  }


  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }

  return (
    <div> 
      <header>
        <button onClick={handleSignOut}>SignOut</button>
      </header>
      {room ? <Chat room={room} /> : <FormChat roomInputRef={roomInputRef} setRoom={setRoom} />}
    </div>
  )
}

export default App


