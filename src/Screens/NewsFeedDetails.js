import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, ScrollView, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
import { GetNewsFeedAction, } from '../Redux/Actions/NewsFeedActions'
import { useDispatch, useSelector } from 'react-redux';
import NewsFeedComponent from '../Components/NewsFeedComponents/NewsFeedComponent';
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



export default NewsFeedDetails = ({ navigation, props }) => {


    useEffect(() => {

    }, [])
 
    
    return (

        <ScrollView style={[rtlView(), styles.container]} >
            <View style={{}}>
                
            </View>

        </ScrollView >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center'
    },

});
