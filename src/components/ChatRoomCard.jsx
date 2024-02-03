import { useState } from "react"

const ChatRoomCard = ({id, name, description, users, setRoom, setPath, showId, chatRooms})  => {

    const findCurrentEl = (array) => {
        const currentel=  array.filter((el) => el.id === id)  
        return currentel
    }
    const handleClick = () => {
        const currentRoom = findCurrentEl(chatRooms)
        if (currentRoom.length !== 1) {
            console.error('there is more than one room with the same id')
        } else {
            setRoom(currentRoom[0])
        }
        setPath('')
    }

    return (
        <li key={id} className='flex' onClick={handleClick}>
            <div className="hover:bg-blue-600 hover:ring-blue-600 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm w-full">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                    <div>
                        <dt className="sr-only">Name</dt>
                        {showId ? <dd className="group-hover:text-white font-semibold text-slate-900">
                            {id}
                        </dd>
                        :
                        <dd className="group-hover:text-white font-semibold text-slate-900">
                            {name}
                        </dd>
                        }
                        
                    </div>
                    <div>
                        <dt className="sr-only">Description</dt>
                        <dd className="group-hover:text-blue-200">{description}</dd>
                    </div>
                    <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                        <dt className="sr-only">Users</dt>
                        {users.map((user, index) => {
                            return (
                                <dd key={index} className="flex gap-4 justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                                    <img src={`https://unavatar.io/${user}`} alt='alt' className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy"/> 
                                </dd>
                                )
                            })}         
                    </div>
                </dl>
            </div>
        </li>
    )
}

export default ChatRoomCard

