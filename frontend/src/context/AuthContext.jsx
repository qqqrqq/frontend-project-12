import React from 'react';
import { useState } from 'react';


const AuthContext = React.createContext({})

const AuthProvider = ({children}) =>{
    const [logged, setLogged] = useState(false)
    const logIn = () => setLogged(true)
    const logOut = () => {
        setLogged(false)
        localStorage.removeItem('userToken')
    }
    const getHeader = () =>{
        const user = JSON.parse(localStorage.getItem('userToken'))
        if(user){
            return {Authorization : `Bearer ${user.token}`}
        }
        return {}
    }
    const username = JSON.parse(localStorage.getItem('userToken')) ?? ''
    return (
        <AuthContext.Provider value = {{logged, logIn, logOut, getHeader, username}}>
            {children}
        </AuthContext.Provider>
    )
}



export default AuthProvider



export {AuthContext}