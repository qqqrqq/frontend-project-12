import App from './App.js';


const init = async (socket) =>{
    return (
        <App socket={socket}/>
    )
}

export default init