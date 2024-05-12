import { Message } from "."

const Messages = () => {
  return (
    <div className="flex flex-col gap-4 bg-_aumSoft p-2 h-[calc(100%-6rem)] overflow-y-scroll overflow-x-hidden">
      <Message owner={true}/>
      <Message owner={false}/>
      <Message owner={true}/>
      <Message owner={false}/>
      <Message owner={true}/>
      <Message owner={false}/>
    </div>
  )
}
export default Messages