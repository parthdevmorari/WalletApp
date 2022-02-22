import React, { useRef, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddExpenseScreenStyle";
import Icon from 'react-native-vector-icons/Feather';
import * as resources from 'resources';
import {InputField,Button,TextArea} from '@Component';


const AddExpenseScreen = ({ navigation, route }) => {


	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);
	const stateUser = useSelector((state) => state.user);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = React.useState('');
	const [phone, setPhone] = useState('')
	const [message, setMessage] = React.useState("");
	const [messageError, setMessageError] = React.useState("");
	const child = React.useRef();

	// useEffect(() => {
	// }, [multipleImages]);   swiper.current.scrollBy(1);


	// React.useEffect(() => {
	// 	const unsubscribe = navigation.addListener('focus', (e) => {
			
	// 	});
	// 	return unsubscribe;
	// });
	// React.useEffect(() => {
		
	// }, [stateUser]);


	const _doValidation = () => {
		let isValidForm = true;
		let messageText = '';
	 if (email === '') {
			setMessageError(true)
			isValidForm = false
			messageText='Please enter your email'	

		}
		else if (phone === '') {
			setMessageError(true)
			isValidForm = false
			messageText='Please enter your phone number'	

		}
		else if (phone.length<10) {
			setMessageError(true)
			isValidForm = false
			messageText='Please enter valid phone number'	

		}
		else if (message === '') {
			setMessageError(true)
			isValidForm = false
			messageText = 'add an discription message'
		}
		

		if (isValidForm === false) {
			alert(messageText);
		}
		if (isValidForm) {
			let request = {}
			request.first_name = firstName;
			request.last_name = lastName;
			request.email = email;
			request.phone = phone;
			request.message =message;
			// dispatch(getInTouchAction(request,navigation))
		}
	}


	


	return (
		<View style={styles.flex1}>
			<ScrollView style={[styles.container,]}>
				
				
				
				 <InputField
				value={email}
				placeholder={'Enter your Title'}
				title={'Title'}
				onChangeText={item => { setEmail(item) }}
				 />
				 <InputField
				value={phone}
				title={'Amount'}
				placeholder={'Enter Amount'}
				onChangeText={item => { setPhone(item) }}
				 />
				<TextArea label={'Message'}
					// mainContainerStyle={styles.textArea}
					secureTextEntry={false} multiline={true} keyboardType={'default'}
					numberOfLines={4}
					// error={messageError}
					inputContainerStyle={styles.textAreaContainer}
					onChangeText={text => setMessage(text)} value={message}
					onChange={() => { setMessageError(false) }}
					placeholder={"Please describe your Message "}
				/>
				{/* <Atoms.Loader loading={stateGlobal.loading}	/> */}

				
			</ScrollView>
			<View style={[styles.submitBtnContainer,]}>
				<Button title={'Submit'} onPress={_doValidation}/>
			</View>
		
		</ View>

	)
}




export default AddExpenseScreen;
