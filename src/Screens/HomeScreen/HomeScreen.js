import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity,KeyboardAvoidingView } from "react-native";
import styles from "./HomeScreenStyles";
import {StickButton,Switch} from '@Component';
const HomeScreen = ({ navigation, route }) => {
	const goToExpense = () => {
		navigation.navigate('AddExpense')
	}
	return (
		<View style={styles.mainContainer}>
			{/* <Switch /> */}
			<StickButton onPress={()=> goToExpense()}/>
		</View>
	);
}



export default HomeScreen;
