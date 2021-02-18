import React, { useState, useEffect, } from 'react';
import {  View, StyleSheet, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



export default NewsFeedScreen = (props) => {


    return (

        <View style={[rtlView(), styles.container]} >


            <View style={{ marginHorizontal: responsiveWidth(5) }}>
            </View>

        </View >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },
   
});
