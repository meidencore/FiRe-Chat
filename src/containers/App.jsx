import React from 'react'
import Auth from '../components/Auth'
import { auth } from '../firebaseConfig.js'
import { useState, useRef } from 'react'
import Cookies from 'universal-cookie'
import Chat from '../components/Chat.jsx'
import FormChat from '../components/FormChat.jsx'

const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null)

  const updateRoom = (update) => {
    setRoom(update)
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
      {room ? <Chat room={room} /> : <FormChat roomInputRef={roomInputRef} setRoom={setRoom} />}
    </div>
  )
}

export default App


