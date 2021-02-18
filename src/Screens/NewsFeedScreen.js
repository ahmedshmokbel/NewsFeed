import React, { useState, useEffect, } from 'react';
import { LayoutAnimation, View, TouchableOpacity, StyleSheet, Text } from "react-native";



export default NewsFeedScreen = (props) => {


    return (

        <View style={[rtlView(), styles.container]} >


            <View style={{ marginHorizontal: responsiveWidth(5) }}>
                <FlatList
                    ref={(ref) => { this.flatListRef = ref; }}
                    numColumns={2}
                    // contentContainerStyle={{ paddingTop: CAT_TOP + 45, elevation: -1000, zIndex: -1000 }}
                    data={this.props.Movies}
                    extraData={this.state}
                    keyExtractor={(item, index) => item + index}
                    renderItem={this._renderItem}
                    onEndReached={this.loadMoreData}
                    onEndReachedThreshold={1}


                />
                {this.state.isLoading &&
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
        padding: 50,
    },
    item: {
        width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 30,
        borderBottomWidth: 0.9,
        borderBottomColor: 'lightgrey',
        overflow: 'hidden',
        paddingVertical: 2,
        marginVertical: 10,

    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
});
