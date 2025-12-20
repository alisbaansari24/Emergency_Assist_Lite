import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator()

export default function BottomTabs() {
    const tabList = [
        {
            route: 'Home',
            component: HomeScreen,
            icon: 'home-outline',
            activeIcon: 'home',
        },
        {
            route: 'Profile',
            component: HomeScreen,
            icon: 'person-outline',
            activeIcon: 'person-sharp',
        },
    ]

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
                tabBarStyle: {
                    height: 55,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
            }}
        >
            {tabList.map((tab, index) => (
                <Tab.Screen
                    key={index}
                    name={tab.route}
                    component={tab.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? tab.activeIcon : tab.icon}
                                size={26}
                                color={focused ? '#086436' : '#9CA3AF'}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}
