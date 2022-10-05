import React from 'react';
import App from './App.js';
import { createInstance } from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import ru from './locales/ru.js';
const init = async (socket) =>{

    const i18next = createInstance()
    await i18next.use(initReactI18next).init({
        resources: {ru},
        lng: 'ru',
    })

    return (
        <I18nextProvider i18next={i18next}>
              <App socket={socket}/>
        </I18nextProvider>
    )
}

export default init