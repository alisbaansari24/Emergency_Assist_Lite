import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTabs from './BottomTabs'

export default function AppContent() {

    const isDarkMode = useColorScheme() === 'dark';
    const safeAreaInsets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <StatusBar
                safeAreaInsets={safeAreaInsets}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <BottomTabs />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
