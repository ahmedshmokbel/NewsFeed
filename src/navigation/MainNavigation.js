import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NewsFeedScreen from '../Screens/NewsFeedScreen';
import i18n from 'i18n-js';
import NewsFeedDetails from '../Screens/NewsFeedDetails';
const NewsFeedStack = createStackNavigator()


export const MainNavigation = (props) => (

    <NewsFeedStack.Navigator  >
        <NewsFeedStack.Screen name='NewsFeed'
            component={NewsFeedScreen}
            titile={'ddd'}
            options={{
                title: i18n.t('NewsFeed'),
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#fff' },
                headerBackTitleVisible: false,
            }} />


        <NewsFeedStack.Screen name='Details'
            component={NewsFeedDetails}
            titile={'ddd'}
            options={{
                title: i18n.t('Details'),
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#fff' },
                headerBackTitleVisible: false,
            }} />


    </NewsFeedStack.Navigator>
)