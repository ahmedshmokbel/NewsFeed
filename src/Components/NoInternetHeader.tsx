import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import ResponsiveModule from '../Utilities/UIHelpers'
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;
 import i18n from 'i18n-js';
import Animated from 'react-native-reanimated';

const NoIntenetHeader = ({ }) => {
    return (
        <Animated.View  style={styles.noInternetHeader}>
            <Text style={styles.noInternetText}>{i18n.t('noInternet')}</Text>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    noInternetHeader: {
        backgroundColor: '#f62433',
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(100)
        //position:'absolute'
    },
    noInternetText: {
        fontSize: scaleFont(18),
        color: '#ffffff',
        marginTop: Platform.OS == 'ios' ? responsiveHeight(40) : 0

    }
})

export default NoIntenetHeader
