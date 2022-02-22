import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreenStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as resources from 'resources';


const SplashScreen = ({ navigation,  }) => {
setTimeout(() => {
<<<<<<< HEAD
	navigation.navigate('Detail')
=======
	navigation.navigate('CardScreen')
>>>>>>> 7032770402aee7b288b2f2edaf02e92af35a2664
}, 2000);
	

	
	return (
		<View  style={[styles.container]}>
		
		</View>
	);
}



export default SplashScreen;
