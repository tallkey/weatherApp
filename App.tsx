import React, {useEffect, useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import * as Location from 'expo-location'
import Loading from "./src/components/Loading";
import WeatherInfo from "./src/components/WeatherInfo";

const API_KEY = '0e9958e2b884dfcb13ba8fe52d9710dd'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
import axios from "axios";

export default function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)
    const [unitSystem, setUnitSystem] = useState('metric')


    useEffect(() => {
        load()
    }, [])

    async function load() {
        try {
            const {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMessage('Can`t get you geo-location :(')
                return
            }
            const location = await Location.getCurrentPositionAsync()
            const {latitude, longitude} = location.coords
            const weatherUrl = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${API_KEY}`

            const response = await fetch(weatherUrl)
            const result = await response.json()
            if (response.ok) {
                setCurrentWeather(result)
            } else {
                setErrorMessage(result.message)
            }

        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    if (currentWeather) {
        return (
            <View style={styles.container}>
                <StatusBar style='auto'/>
                <View style={styles.main}>
                    <WeatherInfo currentWeather={currentWeather}/>
                </View>

            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text>{errorMessage}</Text>
                <StatusBar style='auto'/>
            </View>)
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    main: {
        justifyContent: "center",
        flex: 1,
    }
})
