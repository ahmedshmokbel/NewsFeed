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
var Theme = ''

const NewsFeedStackScreen = (props) => (
    console.log(Theme),
    <NewsFeedStack.Navigator  >
        <NewsFeedStack.Screen name='NewsFeed'
            component={NewsFeedScreen}
            titile={'ddd'}
            options={{
                title: i18n.t('NewsFeed'),
                headerTintColor: Theme === 'light' ? '#000000DD' : 'white',
                headerStyle: { backgroundColor: Theme === 'light' ? 'white' : '#000000DD', },
                headerBackTitleVisible: false,
            }} />


        <NewsFeedStack.Screen name='Details'
            component={NewsFeedDetails}
            titile={'ddd'}
            options={{
                title: i18n.t('Details'),
                headerTintColor: Theme === 'light' ? '#000000DD' : 'white',
                headerStyle: { backgroundColor: Theme === 'light' ? 'white' : '#000000DD', },
                headerBackTitleVisible: false,
            }} />


    </NewsFeedStack.Navigator>
)





export const TabsScreen = (props) => (
    Theme = props.theme,
    <BottomTabs.Navigator
        shifting={false}

        tabBarOptions={{
            gestureEnabled: false,

            //     tabStyle: { backgroundColor: 'orange', borderTopLeftRadius: 50, borderTopRightRadius: 50, height: 50 },

            activeTintColor: props.theme === 'light' ? 'black' : 'white',
            style: { backgroundColor: props.theme === 'light' ? 'white' : '#000000DD', }

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