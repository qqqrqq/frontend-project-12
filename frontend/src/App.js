import React from 'react';
import './App.css';
import LoginPage from './components/pages/Loginpage';
import FailedPage from './components/pages/404'
import MainPage from './components/pages/MainPage'
import AuthProvider from './context/AuthContext.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path={'/'} element={<MainPage />} />
          <Route exact path={'/login'} element={<LoginPage />} />
          <Route path={'*'} element={<FailedPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
