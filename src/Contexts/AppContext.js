import React, { createContext, useState } from 'react';

const AppContext = createContext();

const { Provider, Consumer} = AppContext;

const AppProvider = ({children}) => {

    const [themeColor, SetThemeColor] = useState("#9e9e9e")
    const [preview, setPreview] = useState(false)

  const onPreview = () => {
    setPreview(true)
    console.log(preview)
    setTimeout(()=>setPreview(false), 3000)
  }

    return (
        <Provider
        value={{themeColor, SetThemeColor, preview, onPreview }}
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