import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import NoInternetHeader from '../Components/NoInternetHeader'
import i18n from 'i18n-js';
import { I18nManager } from 'react-native';

const AppContainer = () => {
    //state 
    const [online, setOnline] = useState(true);

    useEffect(() => {
         
        i18n.locale = SettingsState.Lang


        if (SettingsState.Lang == 'en') {

            I18nManager.allowRTL(false);
            I18nManager.forceRTL(false);
        } else {
            I18nManager.allowRTL(true);
            I18nManager.forceRTL(true);
        }


    })

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