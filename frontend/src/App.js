import React from 'react';
import './App.css';
import LoginPage from './components/pages/Loginpage';
import FailedPage from './components/pages/404'
import MainPage from './components/pages/MainPage'
import AuthProvider from './context/AuthContext.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ChatContextProvider from './context/ChatContext.jsx';


function App({ socket }) {
  return (
    <Provider store={store}>
      <ChatContextProvider socket={socket}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route exact path={'/'} element={<MainPage />} />
              <Route exact path={'/login'} element={<LoginPage />} />
              <Route path={'*'} element={<FailedPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ChatContextProvider>
    </Provider>
  );
}

export default App;
