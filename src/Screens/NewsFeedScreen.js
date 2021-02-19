import React, { useState, useEffect, } from 'react';
import {  View, StyleSheet, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
import {GetNewsFeedAction,} from '../Redux/Actions/NewsFeedActions'
import { useDispatch } from 'react-redux';
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



export default NewsFeedScreen = (props) => {

    const dispatch= useDispatch()

    useEffect(()=>{

        dispatch(GetNewsFeedAction('batman','en',"''"))
    })
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
