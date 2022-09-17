import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

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

    return (
        <AuthContext.Provider value = {{logged, logIn, logOut, getHeader}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

export default AuthProvider



export {AuthContext}