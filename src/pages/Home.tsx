import { Chat, Sidebar } from '../components'

const Home = () => {
  return (
    <div className="bg-_darker h-screen flex items-center justify-center">
      <div className="w-[80%] h-[90%] rounded-xl flex flex-row overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div> 
  )
}

export default Home