import ChatForm from "./ChatForm"
import Message from "./Message"
import { useSelector } from 'react-redux';
import ChatHeader from "./ChatHeader"
const Chat = () => {
    const state = useSelector(state => state)

    const activeChannelId = state.currentChannel.currentChannel
   
    const messages = state.messages
    const currentMessages = messages.ids.filter(id => messages.entities[id].channelId === activeChannelId)

   

    return (
        <div className="w-100 d-flex flex-column h-100 overflow-hidden">
            <ChatHeader />
            <div className="bg-white flex-fill ps-5 p-3 overflow-auto">
            {currentMessages.map(id => (
                <Message key={id} body={messages.entities[id].body} username={messages.entities[id].username}/>
            ))}
            </div>
            <ChatForm />
        </div>

    )
}

export default Chat