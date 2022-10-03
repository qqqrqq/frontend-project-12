import React, { createContext, useEffect } from 'react';
import store from '../store/store.js';
import { useSelector } from 'react-redux';
import { addMessage } from '../store/messagesSlice.js';
import { addChannel } from '../store/channelsSlice.js';
import { setChannel} from '../store/currentChanelSlice.js';
import { removeChannel } from '../store/channelsSlice.js';
import { updateChannel } from '../store/channelsSlice.js';
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
        socket.on('removeChannel',(payload)=>{
            store.dispatch(removeChannel(payload))
        })
        socket.on('renameChannel',(payload)=>{
            const { id, ...changes } = payload;
            store.dispatch(updateChannel({ id, changes }))
         
        })
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
    const deleteChannel = (data) =>{

        socket.emit('removeChannel',data)
        store.dispatch(setChannel({id: 1}))
    }
    const renameChannel =(data) =>{
      
       socket.emit('renameChannel',data)
    }
    const value = {sendMessage , addNewChannel,deleteChannel, renameChannel}

    return(
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider

export {ChatContext}