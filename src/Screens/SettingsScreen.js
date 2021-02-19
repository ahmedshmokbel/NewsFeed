
import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react';
import { I18nManager,View,Text,TouchableOpacity } from 'react-native';
 import { useDispatch,  } from 'react-redux';
import * as Updates from 'expo-updates';
import { rtlView } from '../Utilities/UIHelpers';
import {ChangeLanguage} from '../Redux/Actions/SettingsActions'
import { useColorScheme } from 'react-native-appearance';
import { ThemeStyle } from '../Utilities/Theme';

export default SettingsScreen = () => {
    const colorScheme=useColorScheme()

    const dispatch = useDispatch()

    const ArabicLang = () => {
        dispatch(ChangeLanguage("ar", true))
        I18nManager.allowRTL(true);

        I18nManager.forceRTL(true);
        Updates.reloadAsync()


    }

    const EnglishLang = () => {
        dispatch(ChangeLanguage("en", false))
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);

        Updates.reloadAsync()

    }



    return (

        <View style={[rtlView(), { flex: 1, flexDirection: 'row',justifyContent:'center' , alignItems:'center', paddingHorizontal: 60 },colorScheme === 'light'?ThemeStyle.lightContainer:ThemeStyle.darkContainer]}>

            <TouchableOpacity onPress={() => EnglishLang()} style={{marginHorizontal:30, paddingVertical: 10, alignItems: 'flex-start' }}>
                <Text style={colorScheme === 'light'?ThemeStyle.lightThemeText:ThemeStyle.darkThemeText}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => ArabicLang()} style={{ paddingVertical: 10, alignItems: 'flex-start' }}>
                <Text style={colorScheme === 'light'?ThemeStyle.lightThemeText:ThemeStyle.darkThemeText} >العربيه</Text>
            </TouchableOpacity >



        </View >
    )
}







