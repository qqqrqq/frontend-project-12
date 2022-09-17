import React from 'react';
import Chanels from './Chanels';
import Chat from './Chat';


const ChatWindow = () =>{
    return(
        <div className='h-100 flex-fill d-flex container my-4 shadow'>
           <Chanels/>
           <Chat/>
        </div>
    )
}

export default ChatWindow