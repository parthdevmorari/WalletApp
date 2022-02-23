import React, { useRef, useState } from 'react';
import { Text, View, ScrollView,TouchableOpacity,SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddExpenseScreenStyle";
import Icon from 'react-native-vector-icons/Feather';
import * as resources from 'resources';
import {InputField,Button,TextArea} from '@Component';
import {saveSpendingAmt} from '../../Store/spending';
import moment from 'moment';
const date = moment().format("DD MMM YYYY");

const AddExpenseScreen = ({ navigation, route }) => {


	const dispatch = useDispatch();
	const [title, setTitle] = React.useState('');
	const [amount, setAmount] = useState('')
	const [message, setMessage] = React.useState("");
	const [titleError, setTitleError] = React.useState(false);
	const [amountError, setAmountError] = React.useState(false);
	const [messageError, setMessageError] = React.useState(false);
	const child = React.useRef();
React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {
			_clearState()
		});
		return unsubscribe;
	});

	const _clearState = () => {
setTitle('');
setAmount('');
setMessage('');
	}
	
		const _doValidation = () => {
		let isValidForm = true;
		let messageText = '';
	 if (title === ''&& amount === ''&& message === '') {
			setTitleError(true)
			setAmountError(true)
			setMessageError(true)
			isValidForm = false
	

		}else if (title === ''&& amount === '') {
			setTitleError(true)
			setAmountError(true)
			isValidForm = false
	
		}
		else if (amount === ''&& message === '') {
			setAmountError(true)
			setMessageError(true)
			isValidForm = false	
		} else if (title === '') {
			setTitleError(true)
			isValidForm = false	
	
			}
			
		else if (amount === '') {
			setAmountError(true)
			isValidForm = false
			messageText='Please enter amount '	

		}
		
		else if (message === '') {
			setMessageError(true)
			isValidForm = false
			messageText = 'add an discription message'
		}
		

		if (isValidForm === false) {
		}
		if (isValidForm) {
			let request = {}
			request.title = title;
			request.amount = amount;
			request.description =message;
			request.date=date;
			let data=[];
			data.push(request)
			dispatch(saveSpendingAmt(request, navigation))
		}
	}


	return (
		<View style={styles.flex1}>
			<SafeAreaView style={styles.safeAreaView}/>

			<ScrollView style={[styles.container,]}>
				
				
				
				 <InputField
				value={title}
				placeholder={'Enter your Title'}
				title={'Title'}
				onChangeText={item => { setTitle(item),setTitleError(false) }}
				inputContainerStyle={[titleError===true?styles.errorStyle:{}]}

				 />
				 <InputField
				value={amount}
				title={'Amount'}
				keyboardType={'number-pad'}
				placeholder={'Enter Amount'}
				onChangeText={item => { setAmount(item),setAmountError(false) }}
				inputContainerStyle={[amountError===true?styles.errorStyle:{}]}

				 />
				<TextArea label={'Message'}
					// mainContainerStyle={styles.textArea}
					secureTextEntry={false} multiline={true} keyboardType={'default'}
					numberOfLines={4}
					// error={messageError} 
					inputContainerStyle={[messageError===true?styles.errorStyle:{}]}
					onChangeText={text => setMessage(text)} value={message}
					onChange={() => { setMessageError(false) }}
					placeholder={"Please describe your Message "}
				/>
				{/* <Atoms.Loader loading={stateGlobal.loading}	/> */}

				
			</ScrollView>
			<View style={[styles.submitBtnContainer,]}>
			<TouchableOpacity style={styles.buttonStyle} onPress={_doValidation}>
					<Text style={styles.buttonTxt}>Submit</Text>
				</TouchableOpacity>
			</View>
		
		</ View>

	)
}




export default AddExpenseScreen;
