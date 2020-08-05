//setup data layer
//need this to track the basket throughout whole app
//creating global variables that can be passed around in the react app instead of props from grandparent to parent to child
//universal file can be copied throughout other projects

import React, {createContext, useContext, useReducer } from "react";

//this is data layer

export const StateContext = createContext();

// build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how we use it in inside a component
export const useStateValue = () => useContext(StateContext);
