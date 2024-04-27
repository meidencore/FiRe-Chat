import { profile } from "../assets"

const Navbar = () => {
  return (
    <div className="flex item-center justify-between text-_dimSoft bg-_dark h-12 p-3">
      <span className="font-bold cursor-default">FiRe-Chat</span>
      <div className="flex gap-3">
        <img src={profile} alt="profile" className="bg-_dimSoft h-6 w-6 rounded-full object-cover"/>
        <span className="font-normal text-base cursor-default">Meidencore</span>
        <button className="bg-_dimDark text-_dimSoft text-xs border-none cursor-pointer p-1">Logout</button>
      </div>
    </div>
  )
} 
export default Navbar