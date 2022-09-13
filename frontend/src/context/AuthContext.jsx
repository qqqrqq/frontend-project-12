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


    return (
        <AuthContext.Provider value = {{logged, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

export default AuthProvider



export {AuthContext}