import React from 'react';
import './App.css';
import LoginPage from './components/pages/Loginpage';
import FailedPage from './components/pages/404'
import MainPage from './components/pages/MainPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
        <Router>
          <Routes>
            <Route exact path={'/login'} element={<MainPage />} />
            <Route exact path={'/'} element={<LoginPage />} />
            <Route path={'*'} element={<FailedPage />} />
          </Routes>
        </Router>
  );
}

export default App;
