import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers } from 'redux'
import AsyncStorage from "@react-native-community/async-storage";
import { connectionReducer } from "./Reducers/connectionReducer";
import SettingsReducer from "./Reducers/SettingsReducer";
import NewsFeedReducer from "./Reducers/NewsFeedReducer";



export const persistConfig = {
    key: "persist",
    storage: AsyncStorage
};
const rootReducer = combineReducers({
    newsFeed: NewsFeedReducer,
    connectionReducer,
    settings: SettingsReducer,
})


const middlewares = [thunk];

const reducer = persistReducer(
    persistConfig,
    (rootReducer)
);
export default store = createStore(reducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);