import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconTabs from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'

import NewsFeedScreen from '../Screens/NewsFeedScreen';
import i18n from 'i18n-js';
import NewsFeedDetails from '../Screens/NewsFeedDetails';
import SettingsScreen from '../Screens/SettingsScreen';
const NewsFeedStack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()


 const NewsFeedStackScreen = (props) => (

    <NewsFeedStack.Navigator  >
        <NewsFeedStack.Screen name='NewsFeed'
            component={NewsFeedScreen}
            titile={'ddd'}
            options={{
                title: i18n.t('NewsFeed'),
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#000000DD' },
                headerBackTitleVisible: false,
            }} />


        <NewsFeedStack.Screen name='Details'
            component={NewsFeedDetails}
            titile={'ddd'}
            options={{
                title: i18n.t('Details'),
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#000000DD' },
                headerBackTitleVisible: false,
            }} />


    </NewsFeedStack.Navigator>
)





export const TabsScreen = () => (

    <BottomTabs.Navigator
        shifting={false}

        tabBarOptions={{
            gestureEnabled: false,

            //     tabStyle: { backgroundColor: 'orange', borderTopLeftRadius: 50, borderTopRightRadius: 50, height: 50 },

            activeTintColor: 'black',
            //    // style: { backgroundColor: '#D63447', borderTopLeftRadius: 50, borderTopRightRadius: 50, height: 60 }

        }}


    >


        <BottomTabs.Screen name='MainTab' component={NewsFeedStackScreen}
            options={{
                gestureEnabled: false,

                title: i18n.t('NewsFeed'),
                tabBarIcon: (tintcolor) =>
                    <IconTabs
                        color={tintcolor.color}
                        name='newspaper'
                        size={35} />
            }}

 
        />


        <BottomTabs.Screen name='OrderTab' component={SettingsScreen}
            options={{
                title: i18n.t('Settings'),
                tabBarIcon: (tintcolor) =>
                    <Icon
                        color={tintcolor.color}
                        name='settings'
                        size={30} />
            }}


        />
 
    </BottomTabs.Navigator>


)