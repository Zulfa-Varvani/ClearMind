import React, { createContext, useState } from 'react';

const CountContext = createContext();

const CountContextProvider = (props) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {props.children}
        </CountContext.Provider>
    );
};

export {
    CountContext,
    CountContextProvider
};