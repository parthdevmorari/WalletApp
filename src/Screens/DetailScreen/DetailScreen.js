import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity,KeyboardAvoidingView } from "react-native";
import styles from "./DetailScreenStyle";
import { SpendAmountConatiner } from '@Component'
import * as resources from 'resources';

const DetailScreen = ({ navigation, route }) => {

	const [amount, setAmount] = React.useState("");

	return (
		<View style={styles.container}>
			<View style={styles.upperContainer}>
				<View style={styles.logoContainer}>
					<Image source={resources.Logo} style={styles.logoStyle} />
				</View>
				<View style={styles.spendContainer}>
					<Text style={[styles.spendTitle]}>Spending Limit</Text>
				</View>
			</View>

			<View style={styles.lowerContainer}>
				<View style={styles.innerContainer}>
					<View style={styles.imgConatiner}>
						<Image source={resources.GroupMeter} style={styles.meterLogoStyle} />
					</View>
					<View >
						<Text style={styles.txtStyle}>Set a weekly debit card spending limit</Text>
					</View>
				</View>
				<View style={styles.boxContainer}>
					<View style={[styles.box]}>
						<Text style={styles.symbolStyle}>S$</Text>
					</View>
					<View>
						<TextInput style={styles.inputBox}
							onChangeText={setAmount}
							value={amount}
							keyboardType={"number-pad"}
						/>
					</View>
				</View>
				<View style={styles.txtContainer}>
					<Text style={styles.txtStyle2}>Here weekly means the last 7 days - not the calendar week</Text>
				</View>

				<View style={styles.SpendAmountConatiner}>
					<SpendAmountConatiner
						title={'5,000'}
						onPress={() => { setAmount("5,000") }}
					/>
					<SpendAmountConatiner
						title={'10,000'}
						onPress={() => { setAmount("10,000") }}
					/>
					<SpendAmountConatiner
						title={'20,000'}
						onPress={() => { setAmount("20,000") }}
					/>
				</View>
				<TouchableOpacity style={styles.buttonStyle}>
					<Text style={styles.buttonTxt}>Save</Text>
				</TouchableOpacity>

			</View>

		</View>
	);
}



export default DetailScreen;
