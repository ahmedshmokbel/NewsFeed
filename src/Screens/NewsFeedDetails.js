import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



export default NewsFeedDetails = ({ route, navigation }) => {

    const [article, setArticle] = useState({})
    useEffect(() => {
        setArticle(route.params.ArticleData)
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


    },

});
