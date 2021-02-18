import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { responsiveHeight, responsiveWidth, scaleFont } from '../Utilities/UIHelpers'
import * as Animatable from 'react-native-animatable';
import i18n from 'i18n-js';

const NoIntenetHeader = ({ }) => {
    return (
        <Animatable.View animation="slideInDown" style={styles.noInternetHeader}>
            <Text style={styles.noInternetText}>{i18n.t('noInternet')}</Text>
        </Animatable.View>
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