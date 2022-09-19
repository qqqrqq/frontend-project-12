import React from 'react';
import Chanels from './Chanels';
import Chat from './Chat';


const ChatWindow = () =>{
    return(
        <div className='h-100 d-flex container my-4 shadow p-0 overflow-hidden'>
           <Chanels/>
           <Chat/>
        </div>
    )
}

export default ChatWindow