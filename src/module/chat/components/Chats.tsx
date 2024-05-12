import { profile } from "../../../../public/assets"

const Chats = () => {
  return (
    <div className="">
      <div className="p-2 flex items-center gap-2 text-_dimSoft cursor-pointer hover:bg-_dark">
        <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full object-cover"/>
        <div className="flex flex-col">
          <span className="font-medium text-lg">Meidencore</span>
          <p className="font-normal text-base">Hi there!</p>
        </div>
      </div>
      {/* provisional */}
      <div className="p-2 flex items-center gap-2 text-_dimSoft cursor-pointer hover:bg-_dark">
        <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full object-cover"/>
        <div className="flex flex-col">
          <span className="font-medium text-lg">Meidencore</span>
          <p className="font-normal text-base">Hi there!</p>
        </div>
      </div>
      <div className="p-2 flex items-center gap-2 text-_dimSoft cursor-pointer hover:bg-_dark">
        <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full object-cover"/>
        <div className="flex flex-col">
          <span className="font-medium text-lg">Meidencore</span>
          <p className="font-normal text-base">Hi there!</p>
        </div>
      </div>
      <div className="p-2 flex items-center gap-2 text-_dimSoft cursor-pointer hover:bg-_dark">
        <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full object-cover"/>
        <div className="flex flex-col">
          <span className="font-medium text-lg">Meidencore</span>
          <p className="font-normal text-base">Hi there!</p>
        </div>
      </div>
    </div>
  )
}
export default Chats