import React from 'react';
import { Text, Dimensions,Platform, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { ThemeStyle } from '../../Utilities/Theme';
import ResponsiveModule from "../../Utilities/UIHelpers";
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;

interface Props {
    urlToImage: string,
    title: string,
    index:number,
    onPress:()=>void
}
const NewsFeedComponent: React.FC <Props> = props => {
const colorScheme =useColorScheme()

    return (
        <TouchableOpacity onPress={props.onPress}
            key={props.index}>
            <View style={styles.rederItems}>
                <Image
                    source={{ uri: props.urlToImage }}
                    style={styles.Img}
                />

            </View>
            <View style={{ marginTop: responsiveHeight(5), marginHorizontal: responsiveWidth(30) }} >
                <Text style={[{textAlign:'left', fontSize: 15, fontWeight: 'bold', },colorScheme === 'light'?ThemeStyle.lightThemeText:ThemeStyle.darkThemeText]}>{props.title}</Text>

            </View>
        </TouchableOpacity>

    )
}

export default NewsFeedComponent
const styles = StyleSheet.create({

    rederItems: {
        marginTop: responsiveHeight(30),
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'white', 
        alignSelf: 'center',
        maxHeight: responsiveHeight(220), minHeight: responsiveHeight(220),
        ...Platform.select({
            ios: {
                width: 360,

                marginHorizontal: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
            },
            android: {
                //  width: 390,
                width: '95%',
                elevation: 3.5,
                marginHorizontal: 10,
            },
        }),
    },

    Img: {

        maxHeight: responsiveHeight(220),
        minHeight: responsiveHeight(220),

        borderRadius: 10,
        ...Platform.select({
            ios: {
                width: 360,

            },
            android: {
                width: '100%',
            },
        }),

    },



});
