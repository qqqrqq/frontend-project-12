import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import store from '../slices/index.js';
import { addMessage } from '../slices/messagesSlice.js';
import { addChannel, updateChannel, removeChannel } from '../slices/channelsSlice.js';
import { setChannel } from '../slices/currentChannelSlice.js';

const ChatAPIContext = createContext({});

export default function ChatAPIProvider({ socket, children }) {
  const { currentChannel } = useSelector((state) => state.currentChannel);
  useEffect(() => {
    socket.on('newMessage', (payload) => {
      store.dispatch(addMessage(payload));
    });

    socket.on('newChannel', (payload) => {
      store.dispatch(addChannel(payload));
    });

    socket.on('renameChannel', (payload) => {
      const { id, ...changes } = payload;
      store.dispatch(updateChannel({ id, changes }));
    });

    socket.on('removeChannel', ({ id }) => {
      store.dispatch(removeChannel(id));
      if (id === currentChannel) {
        store.dispatch(setChannel({ id: 1 }));
      }
    });
  }, [socket, currentChannel]);

  const sendMessage = (data) => {
    socket.emit('newMessage', data, (response) => {
      if (!response.status) {
        sendMessage(data);
      }
    });
  };

  const createChannel = (data, successCb, errCb) => {
    socket.emit('newChannel', data, (response) => {
      const { status, data: { id } } = response;
      if (status === 'ok') {
        store.dispatch(addChannel(response.data));
        store.dispatch(setChannel({ id }));
        successCb();
      } else {
        errCb();
      }
    });
  };

  const renameChannel = (data, successCb, errCb) => {
    socket.emit('renameChannel', data, ({ status }) => {
      if (status === 'ok') {
        successCb();
      } else {
        errCb();
      }
    });
  };

  const deleteChannel = (data, successCb, errCb) => {
    socket.emit('removeChannel', data, ({ status }) => {
      if (status === 'ok') {
        successCb();
      } else {
        errCb();
      }
    });
  };
  const value = {
    sendMessage, createChannel, deleteChannel, renameChannel,
  };
  return (
    <ChatAPIContext.Provider value={value}>
      {children}
    </ChatAPIContext.Provider>
  );
}

ChatAPIProvider.propTypes = {
  children: PropTypes.element.isRequired,
  socket: PropTypes.shape({
    on: PropTypes.func.isRequired,
    emit: PropTypes.func.isRequired,
  }).isRequired,
};

export { ChatAPIContext };
