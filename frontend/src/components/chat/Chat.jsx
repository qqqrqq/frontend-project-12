import ChatForm from "./ChatForm"
import Message from "./Message"
import ChatHeader from "./ChatHeader"
const Chat = () => {
    return (
        <div className="w-100 d-flex flex-column h-100 overflow-hidden">
            <ChatHeader/>
            <div className="bg-white flex-fill ps-5 p-3 overflow-auto">
               
            </div>
            <ChatForm />
        </div>

    )
}

export default Chat