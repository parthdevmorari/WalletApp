import React from "react";
import { View} from "react-native";
import styles from "./HomeScreenStyles";
import Details from "../../Components/Details";
import {AmountDetail} from '@Component'
import * as resources from 'resources';

const HomeScreen = ({ navigation, }) => {

	return (
		<View style={[styles.container]}>
			<AmountDetail
			title = {'Debit Card'}
			balanceTitle = {'Available balance'}
			amount = {'3,000'}
			imageSource = {resources.Logo}
			amountSymbol= {'S$'}
			/>
			

			<Details
			/>
		</View>
	);
}

export default HomeScreen;
