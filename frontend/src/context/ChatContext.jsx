import React, { createContext, useEffect } from 'react';
import store from '../store/store.js';
import { useSelector } from 'react-redux';
import { addMessage } from '../store/messagesSlice.js';

const ChatContext = createContext({})


const ChatContextProvider = ({socket, children}) =>{
    const activeChannel = useSelector(state => state.currentChannel.currentChannel)
   
    useEffect(()=>{
        socket.on('newMessage', (payload) =>{
            store.dispatch(addMessage(payload))
        })
 
    },[socket, activeChannel])

    const sendMessage = (data) =>{
  
        socket.emit('newMessage',data, (resp) =>{
            if(!resp.status){
                sendMessage(data)
            }
        })
     
    }
   
    const value = {sendMessage}

    return(
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider

export {ChatContext}