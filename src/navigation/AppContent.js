import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTabs from './BottomTabs'

export default function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <BottomTabs
                templateFileName="App.tsx"
                safeAreaInsets={safeAreaInsets}  
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
