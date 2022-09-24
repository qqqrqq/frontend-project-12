import React from 'react';
import Chanels from './Chanels';
import { useSelector } from 'react-redux';
import Chat from './Chat';
import LoadingSpinner from './ChatSpinner';


const ChatWindow = () => {
    const currentChannel = useSelector(state => state.currentChannel.currentChannel)
    return (
        <div className='h-100 d-flex container my-4 shadow p-0 overflow-hidden'>
            <Chanels />
            <div className='w-100'>
               {currentChannel ? <Chat /> : <LoadingSpinner/>}
            </div>
        </div>
    )
}

export default ChatWindow