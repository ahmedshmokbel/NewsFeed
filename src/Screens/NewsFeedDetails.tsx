import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Platform, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeStyle } from '../Utilities/Theme';
import { useColorScheme } from 'react-native-appearance';
import { useSelector } from 'react-redux';
import * as Linking from 'expo-linking';

import { RootState } from '../Redux/Store';
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;

interface articaleI {
    urlToImage: string,
    title: string,
    author: string,
    description: string,
    content: string,
    publishedAt: string,
    url: string

}

export interface RTL {
    back: string;
    direction: string;
    drawerPostion: string;
    textAlign: string;
    writingDirection: string;
}


const NewsFeedDetails = ({ route }: any) => {
    const colorScheme = useColorScheme()
    const [article, setArticle] = useState<articaleI>({ title: '', author: '', description: '', content: '', url: '', urlToImage: '', publishedAt: '' });
    const newsFeedState = useSelector((state: RootState) => state.newsFeed);


    useEffect(() => {

        var article = newsFeedState.articles.find((t: articaleI) => t.author === route.params?.name)
        if (article) {
            setArticle(article)
        } else {
            setArticle(route.params?.item)
        }


        Linking.addEventListener('url', callback)

        return () => {
            // Clean up the subscription
            Linking.removeEventListener('url', callback);
        };
    }, [])

    function callback(event: { url: string; }) {


        let data = Linking.parse(event.url);
        var article = newsFeedState.articles.find((t: articaleI) => t.author === data.queryParams.name)
        setArticle(article)
        console.log(data);

    }
    return (

        <ScrollView style={[styles.container, colorScheme === 'light' ? ThemeStyle.lightContainer : ThemeStyle.darkContainer]}>

            {
                article.urlToImage ?
                    <Image source={{ uri: article.urlToImage }} style={styles.Img} />
                    :
                    <>
                    </>
            }
            <View style={{
                bottom: 0, top: Platform.OS === 'ios' ? responsiveHeight(278) : responsiveHeight(265), height: 80, width: '100%',
                position: 'absolute', backgroundColor: '#000000AA', alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ textAlign: 'left', fontSize: scaleFont(18), fontWeight: 'bold', alignSelf: 'center', color: 'white' }}>{article.title}</Text>
            </View>
            <View style={{ marginTop: responsiveHeight(10), marginHorizontal: responsiveWidth(15) }}>
                <Text style={{ textAlign: 'left', fontSize: scaleFont(15), fontWeight: 'bold', color: colorScheme === 'light' ? 'black' : 'white' }}>{article.author}</Text>
                <Text style={{ textAlign: 'left', fontSize: scaleFont(15), fontWeight: 'bold', color: colorScheme === 'light' ? 'grey' : 'lightgrey', marginVertical: responsiveHeight(10) }}>{moment(article.publishedAt).format('DD MMM YYYY')}</Text>
                <Text style={{ textAlign: 'left', fontSize: scaleFont(13), marginBottom: responsiveHeight(10), color: colorScheme === 'light' ? 'black' : 'white' }}>{article.description}</Text>
                <Text style={{ textAlign: 'left', fontSize: scaleFont(13), marginBottom: responsiveHeight(10), color: colorScheme === 'light' ? 'black' : 'white' }}>{article.content}</Text>


                <TouchableOpacity onPress={() => { Linking.openURL(article.url) }}>
                    <Text style={{ textAlign: 'left', fontSize: scaleFont(13), color: colorScheme === 'light' ? 'blue' : 'lightblue' }}>{article.url}</Text>

                </TouchableOpacity>

            </View>

        </ScrollView >

    );

}

export default NewsFeedDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 200,
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
