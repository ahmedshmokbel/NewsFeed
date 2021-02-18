import {
    CHANGE_LANGUAGE,
} from '../Types';

const initialState = {

    Lang: 'en',
    RTL: false,

};
const SettingsReducer = (state = initialState, action) => {

    switch (action.type) {


        case CHANGE_LANGUAGE:
            
            return {
                ...state,
                Lang: action.payload,
                RTL: action.View
            };
 




        default:
            return state;
    }
};



export default SettingsReducer;