import React from "react";
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Loading() {
    return (

        <View style={styles.container}>
    <Text style={styles.text}> Loading weather... </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 100,
        paddingHorizontal: 50,
        backgroundColor: '#FDF6AA',
    },
    text:{
        color: '#2c2c2c',
        fontSize: 25
    }
})
