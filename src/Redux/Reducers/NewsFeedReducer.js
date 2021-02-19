import {
    GET_NEWS_FEEDS_FAILED, GET_NEWS_FEEDS, GET_NEWS_FEEDS_SUCCESS
} from '../Types';

const initialState = {

    articles: [],
    isLoading: false,

};
const NewsFeedReducer = (state = initialState, action) => {

    switch (action.type) {


        case GET_NEWS_FEEDS:

            return {
                ...state,
                isLoading: true
            };

        case GET_NEWS_FEEDS_SUCCESS:

            return {
                ...state,
                articles: action.articles,
                isLoading: false
            };



        case GET_NEWS_FEEDS_FAILED:

            return {
                ...state,

                isLoading: false
            };

        default:
            return state;
    }
};



export default NewsFeedReducer;