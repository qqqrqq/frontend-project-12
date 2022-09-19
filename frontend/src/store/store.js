import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice.js';
import channelsReducer from './channelsSlice.js';
import currentChannelReducer from './currentChanelSlice.js';

export default configureStore({
    reducer:{
        channels: channelsReducer,
        messages: messagesReducer,
        currentChannel: currentChannelReducer,
    }
})