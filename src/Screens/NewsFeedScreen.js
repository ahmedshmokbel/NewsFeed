import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
import { GetNewsFeedAction, } from '../Redux/Actions/NewsFeedActions'
import { useDispatch, useSelector } from 'react-redux';
import NewsFeedComponent from '../Components/NewsFeedComponents/NewsFeedComponent';
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



export default NewsFeedScreen = (props) => {
    const newsFeedState = useSelector((state) => state.newsFeed);

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(GetNewsFeedAction('batman', 'en', "8"))
        console.log(newsFeedState.articles[0]);
    }, [])


   const _renderItem = ({ item, index }) => {

        return (


            <NewsFeedComponent

                index={index}

                initialNumToRender={10}
                // navigation={}
                {...item}
            />

        );
    }
    return (

        <View style={[rtlView(), styles.container]} >
            <View style={{  }}>
                <FlatList

                    data={newsFeedState.articles}
                    extraData={newsFeedState.articles}
                    keyExtractor={(item, index) => item + index}
                    renderItem={_renderItem}
                    onEndReachedThreshold={1}


                />
                {newsFeedState.isLoading &&
                    <ActivityIndicator size='large' color='black' />
                }
            </View>

        </View >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       
    },

});
