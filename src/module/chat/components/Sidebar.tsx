import { Chats, Navbar, Search } from "."

const Sidebar = () => {
  return (
    <div className='basis-1/3 bg-_dimDark relative'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar