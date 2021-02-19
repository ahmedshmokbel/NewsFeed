import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
import { GetNewsFeedAction, } from '../Redux/Actions/NewsFeedActions'
import { useDispatch, useSelector } from 'react-redux';
import NewsFeedComponent from '../Components/NewsFeedComponents/NewsFeedComponent';
import SearchBar from '../Components/SearchBar';
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



export default NewsFeedScreen = ({ navigation, props }) => {
    const newsFeedState = useSelector((state) => state.newsFeed);
    const [article, setArticle] = useState([])
    const [search, setSearch] = useState('')

    const [filterArticle, setFilterArticle] = useState([])


    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(GetNewsFeedAction('batman', 'en', "8")).then(res => {
            setArticle(res)
            setFilterArticle(res)
        })


    }, [])



    const Search = (searchText) => {

        setSearch(searchText)
        let filteredData = article.filter(function (item) {
            return item.title.includes(searchText);
        });

        setFilterArticle(filteredData)
    }

    const onClear = () => {

        setSearch('')
        let filteredData = article.filter(function (item) {
            return item.title.includes('');
        });

        setFilterArticle(article)
    }


    const _renderItem = ({ item, index }) => {

        return (
            <NewsFeedComponent

                index={index}
                onPress={() => navigation.navigate('Details', { ArticleData: item })}
                initialNumToRender={10}
                navigation={navigation}
                {...item}
            />

        );
    }


    return (

        <View style={[rtlView(), styles.container]} >
            <View style={{ marginTop: responsiveHeight(40), paddingBottom: responsiveHeight(50) }}>
                <SearchBar value={search} onChangeText={(text) => Search(text)} onClear={onClear} />
                {newsFeedState.isLoading ?
                    <ActivityIndicator size='large' color='black' />
                    :
                    <FlatList

                        data={filterArticle}
                        extraData={newsFeedState.Îarticles}
                        keyExtractor={(item, index) => item + index}
                        renderItem={_renderItem}
                        onEndReachedThreshold={1}


                    />


                }
            </View>

        </View >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center'
    },

});
