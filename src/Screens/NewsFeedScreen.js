import React, { useState, useEffect, useCallback, } from 'react';
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
    const [page, setPage] = useState()
    const [load, setLoad] = useState(false)
    const [refreshing, setRefreshing] = useState(false);



    const [filterArticle, setFilterArticle] = useState([])


    const dispatch = useDispatch()


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(GetNewsFeedAction('batman', 'en', page)).then(res => {
            setArticle(res)
            setFilterArticle(res)

            setRefreshing(false)
        })
    }, []);

    useEffect(() => {

        dispatch(GetNewsFeedAction('batman', 'en', page)).then(res => {
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




    const loadMoreData = () => {
        if (page <= 5) {


            setLoad(true)

            dispatch(GetNewsFeedAction('batman', 'en', page)).then(res => {
                setPage(page + 1);
                setArticle([...article, ...res]);
                setFilterArticle([...filterArticle, ...res])
                setLoad(false)
            })
        } else {
            console.log('my account is free so the max pages is 5');
            setLoad(false)
            return
        }
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
            <SearchBar value={search} onChangeText={(text) => Search(text)} onClear={onClear} />

            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                {newsFeedState.isLoading &&
                    <ActivityIndicator size='large' color='black' />
                }
                <>
                    <FlatList

                        data={filterArticle}
                        extraData={newsFeedState.Îarticles}
                        keyExtractor={(item, index) => item + index}
                        renderItem={_renderItem}
                        onEndReachedThreshold={1}
                        onEndReached={loadMoreData}
                        onEndReachedThreshold={0.1}
                        onRefresh={() => onRefresh()}
                        refreshing={refreshing}
                    />
                    {load == true &&
                        < ActivityIndicator size='large' color='red' />

                    }
                </>

            </View>

        </View >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: responsiveHeight(0),
        paddingBottom: responsiveHeight(100)

    },

});
