import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from "react-router-dom";
const MainPage = () => {
    const changeLocation = useNavigate()
    useEffect(()=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'))
        if(!userToken){
            changeLocation('/login')
            return
        }
    },[])

    return (
        <>
            <Navbar />
            <div className='container bg-danger '>MainPage</div>
        </>

    )
}
export default MainPage