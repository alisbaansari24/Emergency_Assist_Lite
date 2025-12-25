import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#fe8650',
                tabBarInactiveTintColor: '#2f3a50',
                // tabBarBackground:'#f6f5fb',
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    borderRadius: 16,
                    paddingTop: 8,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: '#ebe9f5'

                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name='home'
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='My Circle'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="notebook" color={color} size={26} />
                    )
                }}
            />


            <Tab.Screen
                name='Explore'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="explore" color={color} size={28} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name='person-sharp'
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
