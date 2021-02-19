import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Linking, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



export default NewsFeedDetails = ({ route, navigation }) => {

    const [article, setArticle] = useState({})
    useEffect(() => {
        setArticle(route.params.ArticleData)
        console.log(article);
    }, [])


    return (

        <ScrollView style={[rtlView(), styles.container]} >
            <Image source={{ uri: article.urlToImage }} style={styles.Img} />
            <View style={{
                bottom: 0, top: responsiveHeight(278), height: 80, width: '100%',
                position: 'absolute', backgroundColor: '#000000AA', alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontSize: scaleFont(18), fontWeight: 'bold', alignSelf: 'center', color: 'white' }}>{article.title}</Text>
            </View>
            <View style={{ marginTop: responsiveHeight(10), marginHorizontal: responsiveWidth(15) }}>
                <Text style={{ fontSize: scaleFont(15), fontWeight: 'bold', color: 'black' }}>{article.author}</Text>
                <Text style={{ fontSize: scaleFont(15), fontWeight: 'bold', color: 'grey', marginVertical: responsiveHeight(10) }}>{moment(article.publishedAt).format('DD MMM YYYY')}</Text>
                <Text style={{ fontSize: scaleFont(13), marginBottom: responsiveHeight(10) }}>{article.description}</Text>
                <Text style={{ fontSize: scaleFont(13), marginBottom: responsiveHeight(10) }}>{article.content}</Text>


                <TouchableOpacity onPress={() => { Linking.openURL(article.url) }}>
                    <Text style={{ fontSize: scaleFont(13), color: 'blue' }}>{article.url}</Text>

                </TouchableOpacity>

            </View>

        </ScrollView >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Img: {

        maxHeight: responsiveHeight(350),
        minHeight: responsiveHeight(350),
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                width: '100%',

            },
            android: {
                width: '100%',
            },
        }),

    },


});
