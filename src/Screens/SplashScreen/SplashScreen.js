import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreenStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as resources from 'resources';


const SplashScreen = ({ navigation,  }) => {
setTimeout(() => {
	navigation.navigate('Detail')
}, 2000);
	

	
	return (
		<View  style={[styles.container]}>
		
		</View>
	);
}



export default SplashScreen;
