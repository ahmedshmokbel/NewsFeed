import { get_request } from '../../Network/networkLayer'
import { GET_NEWS_FEEDS, GET_NEWS_FEEDS_FAILED, GET_NEWS_FEEDS_SUCCESS } from '../Types';


export const GetNewsFeedAction = (catgory:string, lang:String, page:Number) => async (dispatch: (arg0: { type: string; articles?: any; }) => void) => {
    dispatch({
        type: GET_NEWS_FEEDS,
    });
    const apiKey = 'cef9a41cabf343f086e1939301ca2e79'
    return new Promise((resolve, reject) => {
        try {

            get_request(`everything/?apiKey=${apiKey}&q=${catgory}&language=${lang}&page=${page}`)
                .then(res => {

                    if (res.status) {
                        dispatch({
                            type: GET_NEWS_FEEDS_SUCCESS,
                            articles: res.articles
                        });
                        resolve(res.articles)
                    }
                    else {
                        dispatch({
                            type: GET_NEWS_FEEDS_FAILED,
                        });
                    }
                })
                .catch(err => {
                    console.log(' error:', err)
                    dispatch({
                        type: GET_NEWS_FEEDS_FAILED,
                    });

                })
        } catch (err) {
            reject(err);
        }
    });


}
