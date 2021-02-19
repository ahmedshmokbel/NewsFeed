import { get_request } from '../../Network/networkLayer'
import { GET_NEWS_FEEDS, GET_NEWS_FEEDS_FAILED, GET_NEWS_FEEDS_SUCCESS } from '../Types';


export const GetNewsFeedAction = (catgory, lang, page) => async dispatch => {
    dispatch({
        type: GET_NEWS_FEEDS,
    });
    const apiKey = '28b7d42f392b4fc9ae7d979e515f8164'
    get_request(`everything/?apiKey=${apiKey}&q=${catgory}&language=${lang}&pageSize=${page}`)
        .then(res => {

            if (res.status) {
                dispatch({
                    type: GET_NEWS_FEEDS_SUCCESS,
                    articles: res.articles
                });
            }
            else {
                dispatch({
                    type: GET_NEWS_FEEDS_FAILED,
                });
            }
        })
        .catch(err => {
            console.log('resend error:', err)
            dispatch({
                type: GET_NEWS_FEEDS_FAILED,
            });

        })



}