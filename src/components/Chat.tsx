import { Input, Messages } from "./"

const Chat = () => {
    return (
      <div className='basis-2/3 bg-_soft'>
        <div className="h-12 bg-_dimDark flex items-center justify-start p-2">
          <span className="text-_dimSoft font-medium">Meidencore</span>
        </div>
        <Messages />
        <Input />
      </div>
    )
  }
  
  export default Chat