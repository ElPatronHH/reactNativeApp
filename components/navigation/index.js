import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContextProvider } from 
//import { View, Text } from ""

export const Navigation = () => {
    const isAuthenticated = useContext(AuthenticationContext);
    return isAuthenticated ? <AppNavigator/> : (
        
    );
}