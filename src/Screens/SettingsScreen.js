
import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react';
import { I18nManager,View,Text,TouchableOpacity } from 'react-native';
 import { useDispatch,  } from 'react-redux';
import * as Updates from 'expo-updates';
import { rtlView } from '../Utilities/UIHelpers';


export default SettingsScreen = () => {

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

        <View style={[rtlView(), { flex: 1, flexDirection: 'row',justifyContent:'center' , alignItems:'center', paddingHorizontal: 60 }]}>

            <TouchableOpacity onPress={() => EnglishLang()} style={{marginHorizontal:30, paddingVertical: 10, alignItems: 'flex-start' }}>
                <Text >English</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => ArabicLang()} style={{ paddingVertical: 10, alignItems: 'flex-start' }}>
                <Text  >العربيه</Text>
            </TouchableOpacity >



        </View >
    )
}







