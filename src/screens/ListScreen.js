import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from '../components'

export const ListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
            <Button 
            onPress={() => navigation.navigate('Details') } 
            buttonText={"Go to details!"} 
            />
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
