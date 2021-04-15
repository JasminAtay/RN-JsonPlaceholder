import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ThemesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Themes Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
