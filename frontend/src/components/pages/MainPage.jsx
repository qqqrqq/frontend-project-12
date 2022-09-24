import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import { useDispatch, batch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth.jsx';
import routes from '../routes';
import { addChannels } from '../../store/channelsSlice';
import { addMessages } from '../../store/messagesSlice';
import { setChannel } from '../../store/currentChanelSlice';
import ChatWindow from '../chat/ChatWindow'
const MainPage = () => {
    const changeLocation = useNavigate()
    const authorization = useAuth()
    const chanelsPath = routes.data()
    const dispatch = useDispatch()
    useEffect(() => {
        const userToken = JSON.parse(localStorage.getItem('userToken'))
        if (!userToken) {
            changeLocation('/login')
            return
        }
        authorization.logIn()
        axios.get(chanelsPath, { headers: authorization.getHeader() }).then(response => {
            batch(() => {
               
                dispatch(addChannels(response.data.channels))
                dispatch(addMessages(response.data.messages))
                dispatch(setChannel({ id: response.data.currentChannelId }))
            })
        })
    }, [authorization.logged])

    return (
        <div className='d-flex flex-column bg-light max-vh-100 vh-100 overflow-hidden'>
            <Navbar />
            <ChatWindow/>
        </div>

    )
}
export default MainPage