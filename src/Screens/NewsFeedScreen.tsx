import React, { useState, useEffect, useCallback, ReactNode, } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, useColorScheme, StatusBar, } from "react-native";
import { rtlView } from '../Utilities/UIHelpers';
import ResponsiveModule from '../Utilities/UIHelpers'
import { GetNewsFeedAction, } from '../Redux/Actions/NewsFeedActions'
import { useDispatch, useSelector } from 'react-redux';
import NewsFeedComponent from '../Components/NewsFeedComponents/NewsFeedComponent';
import SearchBar from '../Components/SearchBar';
import { ThemeStyle } from '../Utilities/Theme';
import { RootState } from '../Redux/Store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;



interface articale {
    urlToImage: string,
    title: string,
    author: string,
    description: string,
    content: string,
    publishedAt: string,
    url: string,
    

}
const NewsFeedScreen = ({ navigation }: any) => {

    const newsFeedState = useSelector((state: RootState) => state.newsFeed);
    const Lang = useSelector((state: RootState) => state.settings).Lang;

    const [article, setArticle] = useState<articale[]>([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState<number>(1)
    const [load, setLoad] = useState<Boolean>(false)
    const [refreshing, setRefreshing] = useState(false);
    const colorScheme = useColorScheme();


    const [filterArticle, setFilterArticle] = useState<articale[]>([])

    const dispatch = useDispatch<ThunkDispatch<RootState, {}, Action<string>>>();



    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(GetNewsFeedAction('bitcoin', Lang, page)).then(res => {
            setArticle(res)
            setFilterArticle(res)

            setRefreshing(false)
        })
    }, []);

    useEffect(() => {

        dispatch(GetNewsFeedAction('bitcoin', Lang, page)).then(res => {
            setArticle(res)
            setFilterArticle(res)
        })


    }, [])



    const Search = (searchText: string) => {

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

    //exp://192.168.1.2:19000/stack/article?name=Maya Phillips


    const loadMoreData = () => {
        if (page <= 5) {


            setLoad(true)

            dispatch(GetNewsFeedAction('bitcoin', Lang, page)).then(res => {
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

    const _renderItem = ({ item, index }: any) => {

        return (
            <NewsFeedComponent

                index={index}
                onPress={() => navigation.navigate('Details', { name: item.author ,item:item})}
                initialNumToRender={10}
                navigation={navigation}
                {...item}
            />

        );
    }


    return (

        <View style={[styles.container, colorScheme === 'light' ? ThemeStyle.lightContainer : ThemeStyle.darkContainer]} >
            <SearchBar value={search} onChangeText={(text: string) => Search(text)} onClear={onClear} />

            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                {(newsFeedState.isLoading && refreshing == false) &&
                    <ActivityIndicator size='large' color='black' />
                }
                <>
                    <FlatList

                        data={filterArticle}
                        extraData={newsFeedState.articles}
                        keyExtractor={(item: articale, index: Number) => index.toString()}
                        renderItem={_renderItem}
                        onEndReachedThreshold={1}
                        onEndReached={loadMoreData}

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

export default NewsFeedScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: responsiveHeight(0),
        paddingBottom: responsiveHeight(100)

    },

});
