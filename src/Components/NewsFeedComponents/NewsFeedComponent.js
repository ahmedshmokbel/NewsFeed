import React from 'react';
import { Text, Dimensions, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ResponsiveModule from "../../Utilities/UIHelpers";
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;


export default NewsFeedComponent = (props) => {


    return (
        <TouchableOpacity style={styles.rederItems}
            key={props.index}>
            <Image
                source={{ uri: props.urlToImage }}
                style={styles.Img}
            />
            <View style={{ marginTop: responsiveHeight(5) }} >
                <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{props.title}</Text>

            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    rederItems: {
        marginVertical: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        maxHeight: responsiveHeight(240), minHeight: responsiveHeight(240),
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
