import { file } from "../../../assets"

const Input = () => {
  return (
    <div className="flex flex-row item-center justify-between bg-_dimSoft h-12 p-2">
      <input type="text" placeholder="Type something..." className="w-full border-none focus:ring-0 text-base bg-_dimSoft"/>
      <div className="flex flex-row px-2 items-center gap-2">
        <input className="hidden " type="file" id="file"/>
        <label htmlFor="file">
          <img src={file} alt="file" className="min-w-10 h-10 cursor-pointer"/>
        </label>
        <button className="border-none rounded px-4 py-2 bg-_dark text-_soft">
          Send
        </button>
      </div>
    </div>
  )
}
export default Input