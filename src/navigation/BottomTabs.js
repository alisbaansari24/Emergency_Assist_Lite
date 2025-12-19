import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'

export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
    const tabList = [
        {
            route: 'Home',
            component: <HomeScreen />
        }

    ]
    return (
        <View>
            <Text>BottomTabs</Text>
        </View>
    )
}