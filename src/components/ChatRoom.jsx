import { useState, useEffect, useRef } from "react"
import { getMessages, postMessages } from "../services/handleChatRooms"
import { cookies } from "../services/handleAuth"

const authUser = cookies.get('displayName')


const ChatRoom = ({room}) => {

  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState([])
  const autoScroll = useRef()

  const handleSubmit = async (event) => {
	event.preventDefault()
	if (newMessage === "") return // prenvent send an empty message

	const response = await postMessages(room, newMessage)
	// clean the input field

    response ? setNewMessage("") : alert('error sending your message\ncheck your network connection')
  }
  useEffect(() => {
      // update the state with the messages grabed from the DB
    getMessages(room, setMessages)
  },[])

  //autoscroll to the last message
  useEffect(()=> {autoScroll.current.scrollIntoView({behavior: 'smooth'})},[messages])

  return (
	<div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-b-xl overflow-y-auto">
		<div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
			{messages.map(({id, text, author, createdAt}) => {
					const time = createdAt ? createdAt.toDate().toLocaleTimeString('en-us', {timeStyle: 'short'}) : ''
				if (author === authUser) {
				return (
					<div key={id} className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
						<div>
							<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
								<p className="text-sm break-words">{text}</p>
							</div>
							<span className="text-xs text-gray-500 leading-none">{time}</span>
						</div>
						<img className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" src={`https://unavatar.io/${author}`} alt="avatar" />
					</div>
				)
				} else {
					return (
						<div key={id} className="flex w-full mt-2 space-x-3 max-w-xs">
							<img className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" src={`https://unavatar.io/${author}`} alt="avatar" />
							<div>
								<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
									<p className="text-sm break-words">{text}</p>
								</div>
								<span className="text-xs text-gray-500 leading-none">{time}</span>
							</div>
						</div>
					)
				}}
				)
			}
			<div ref={autoScroll}/>
		</div>
		
		<div className="bg-gray-300 p-2 flex">
			<input 
			onChange={(event) => setNewMessage(event.target.value)}
			onKeyDown={(event) => {if (event.code === "Enter") handleSubmit(event)}}
        	value={newMessage} 
			placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-l-md py-3"/>

			<button 
			onClick={handleSubmit} 
			className="inline-flex items-center justify-center rounded-r-md px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-600 hover:bg-blue-500 focus:outline-none">
               <span className="font-bold">Send</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
               </svg>
            </button>
		</div>
	</div>
  )
}

export default ChatRoom

