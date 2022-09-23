import { useContext } from 'react';

import { ChatContext } from '../context/ChatContext.jsx';


const useAPIChat = () => useContext(ChatContext)

export default useAPIChat