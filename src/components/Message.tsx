import { profile } from "../assets"

interface Props {
  owner: boolean
}

const style = {
  contentSent:'flex gap-5 flex-row-reverse',
  contentRecieve:'flex gap-5 flex-row',
  messageSent: 'max-w-[80%] flex flex-col gap-2 items-end',
  messageRecieve: 'max-w-[80%] flex flex-col gap-2 items-start',
  textSent: 'bg-_dark text-_soft py-2 px-5 rounded-md rounded-tr-none max-w-max',
  textRecieve:'bg-_soft text-_dark py-2 px-5 rounded-md rounded-tl-none max-w-max',
}

const Message = ({ owner }: Props) => {
  return (
    <div className={owner ? style.contentSent : style.contentRecieve}>
      <div className="flex flex-col mb-5">
        <img src={profile} alt="profile_pic" className="w-10 h-10 rounded-full object-cover min-w-10"/>
        <span className="text-sm">just now</span>
      </div>
      <div className={owner ? style.messageSent : style.messageRecieve}>
        <p className={owner ? style.textSent : style.textRecieve}>Hi there</p>
        <img src={profile} alt="upload_image" className="w-[50%]"/>
      </div>
    </div>
  )
}
export default Message