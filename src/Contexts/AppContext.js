import React, { createContext, useState } from 'react';

const AppContext = createContext();

const { Provider, Consumer} = AppContext;

const AppProvider = ({children}) => {

    const [themeColor, SetThemeColor] = useState("#9e9e9e")

    return (
        <Provider
        value={{themeColor, SetThemeColor }}
        >
            {children}
        </Provider>
    )
}

export {
    AppProvider,
    Consumer as AppConsumer,
    AppContext
}