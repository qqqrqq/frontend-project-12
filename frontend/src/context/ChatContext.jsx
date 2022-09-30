import React, { createContext, useEffect } from 'react';
import store from '../store/store.js';
import { useSelector } from 'react-redux';
import { addMessage } from '../store/messagesSlice.js';
import { addChannel } from '../store/channelsSlice.js';
import { setChannel} from '../store/currentChanelSlice.js';

const ChatContext = createContext({})


const ChatContextProvider = ({socket, children}) =>{
    const activeChannel = useSelector(state => state.currentChannel.currentChannel)
   
    useEffect(()=>{
        socket.on('newMessage', (payload) =>{
            store.dispatch(addMessage(payload))
        })
        socket.on('newChannel', (payload) => {
            store.dispatch(addChannel(payload)) 
          });
    },[socket, activeChannel])

    const sendMessage = (data) =>{
  
        socket.emit('newMessage',data, (resp) =>{
            if(!resp.status){
                sendMessage(data)
            }
        })
    }

    const addNewChannel = (data) =>{
        socket.emit('newChannel', data, (resp)=>{
            if(resp.status === 'ok'){
                store.dispatch(addChannel(resp.data))
                store.dispatch(setChannel({id: resp.data.id}))
            }
        });
    }
   
    const value = {sendMessage , addNewChannel}

    return(
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider

export {ChatContext}