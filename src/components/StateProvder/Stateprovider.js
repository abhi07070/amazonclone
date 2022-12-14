import React, { createContext, useContext, useReducer } from "react";

// Prepare the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer to each component
export const Stateprovder = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);