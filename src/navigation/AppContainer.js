import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import NoInternetHeader from '../Components/NoInternetHeader'

const AppContainer = () => {
    //state 
    const [online, setOnline] = useState(true);


    useEffect(() => {
        // Subscribe for connection status
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(updateConnectionStatus(state.isConnected));
            setOnline(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, [online])
    return (
        <NavigationContainer>
            {online ? null : <NoInternetHeader />}
        </NavigationContainer >
    )
}


export default AppContainer