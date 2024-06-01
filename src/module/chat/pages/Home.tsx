import { Chat, Sidebar } from '../components'

const Home = () => {
  return (
    <div className="bg-_aumDark h-screen flex items-center justify-center">
      <div className="w-[90%] lg:w-[80%] h-[90%] rounded-xl flex flex-row overflow-hidden shadow-_dimSoft shadow-sm">
        <Sidebar />
        <Chat />
      </div>
    </div> 
  )
}

export default Home