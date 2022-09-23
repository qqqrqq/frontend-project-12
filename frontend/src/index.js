import React from 'react';
import ReactDOM from 'react-dom/client';
import io from 'socket.io-client';
import './index.css';
import 'bootstrap';
import init from './init.jsx';


const app = async () =>{
  
  const socket = io()
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const initApp = await init(socket)
  root.render(
    <React.StrictMode>
      {initApp}
    </React.StrictMode>
  );
}

app()

