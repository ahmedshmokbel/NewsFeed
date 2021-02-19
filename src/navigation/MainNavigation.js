import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NewsFeedScreen from '../Screens/NewsFeedScreen';
const NewsFeedStack = createStackNavigator()


export const MainNavigation = (props) => (

    <NewsFeedStack.Navigator  >
        <NewsFeedStack.Screen name='NewsFeed'
            component={NewsFeedScreen}
            options={{
               titile:'d'

            }} />
       


    </NewsFeedStack.Navigator>
)