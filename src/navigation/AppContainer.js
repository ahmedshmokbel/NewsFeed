import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import NoInternetHeader from '../Components/NoInternetHeader'
import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import { TabsScreen } from './MainNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { updateConnectionStatus } from '../Redux/Actions/ConnectionActions';
import { useColorScheme } from 'react-native-appearance';
import * as Linking from 'expo-linking';

const AppContainer = (props) => {
    //state 
    const [online, setOnline] = useState(true);
    const dispatch = useDispatch()
    const SettingsState = useSelector((state) => state.settings);
    const colorScheme = useColorScheme()
    useEffect(() => {



        Linking.addEventListener('url', callback)


        i18n.locale = SettingsState.Lang


        if (SettingsState.Lang == 'en') {

            I18nManager.allowRTL(false);
            I18nManager.forceRTL(false);
        } else {
            I18nManager.allowRTL(true);
            I18nManager.forceRTL(true);
        }


    })
    function callback(event) {


        let data = Linking.parse(event.url);
        console.log("data: ", data);
    }

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
        <NavigationContainer linking={props.linking}>
            {online ? null : <NoInternetHeader />}
            <TabsScreen theme={colorScheme} />
        </NavigationContainer >
    )
}


export default AppContainer