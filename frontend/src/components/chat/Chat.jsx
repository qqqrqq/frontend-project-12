import React from 'react';
import ChatForm from "./ChatForm"
import Message from "./Message"
import { useSelector } from 'react-redux';
import ChatHeader from "./ChatHeader"

const Chat = () => {
    const state = useSelector(state => state)

    const activeChannelId = state.currentChannel.currentChannel

    const messages = state.messages
    const currentMessages = messages.ids.filter(id => messages.entities[id].activeChannelId === activeChannelId)
 
   const channelName = state.channels.entities[activeChannelId].name 


    return (
        <div className="w-100 d-flex flex-column h-100 overflow-hidden">
            <ChatHeader name ={channelName} count={currentMessages.length}/>
            <div className="bg-white flex-fill ps-5 p-3 overflow-auto">
                {currentMessages.map(id =>{
                    return <Message key={id} body={messages.entities[id].body} username={messages.entities[id].username}/>
                })}
            </div>
            <ChatForm />
        </div>

    )
}

export default Chat