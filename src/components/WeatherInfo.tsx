import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';

export default function WeatherInfo({currentWeather}: any) {

    const {
        main: {temp},
        weather: [details],
        name
    } = (currentWeather)

    const {icon} = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.WeatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
            <Text>{temp} &#8451;</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    WeatherInfo: {
        alignItems: "center",
    },
    weatherIcon: {
        width: 100,
        height: 100,
    }
})
