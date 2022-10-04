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
            store.dispatch(removeChannel(payload.id))
            if(payload.id === activeChannel){
                store.dispatch(setChannel({id: 1}))
            }
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

    const addNewChannel = (data, notifySuccess, notifyError) =>{
        socket.emit('newChannel', data, (resp)=>{
            if(resp.status === 'ok'){
                store.dispatch(addChannel(resp.data))
                store.dispatch(setChannel({id: resp.data.id}))
                notifySuccess();
            }else{
                notifyError()
            }
        });
    }
    const deleteChannel = (data,notifySuccess,notifyError) =>{

        socket.emit('removeChannel',data, (({status})=>{
            if(status ==='ok'){
                notifySuccess()
            }else{
                notifyError()
            }
        }))
       
    }
    const renameChannel =(data, notifySuccess, notifyError) =>{
      
       socket.emit('renameChannel',data,(({status})=>{
            if(status === 'ok'){
                notifySuccess()
            }else{
                notifyError()
            }
       }))
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