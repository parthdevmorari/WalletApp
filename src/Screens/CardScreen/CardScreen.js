import React, {useState,useEffect} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import styles from './CardScreenStyle';
import {AmountDetail, Card, RowItem, ProgressBar} from '@Component';
import * as resources from 'resources';
import {color} from '../../Constants/Color';
import { useSelector } from "react-redux";

const CardScreen = ({navigation}) => {
	const [spendLimitvisiible, setspendLimitvisiible] = useState(false);
	const [freezeCard, setFreezeCard] = useState(false);
	const [spendLimit, setSpendLimit] = useState(0);
	const [spendPer, setSpendPer] = useState(0);
	const [spendTotal, setSpendTotal] = useState(0);
	const spendingData = useSelector(state => state.spending);

	const getSpendPer =()=>{
		setSpendLimit(spendingData.maxLimit.amount)
		let spendAmount = 0;
		for(let i = 0; i < spendingData.spendData.length; i++){
			spendAmount += parseInt(spendingData.spendData[i].amount)
		}
		setSpendTotal(spendAmount)
		if(spendingData?.maxLimit?.amount && spendAmount > 0){
			let spendPerData = (spendAmount/spendingData.maxLimit.amount) ;
			let per =	parseFloat(spendPerData).toFixed(2);
			setSpendPer(per);
			console.log("spendingData", per);
		}
	}
   
	useEffect(() => {
		getSpendPer()
	}, [])

	useEffect(() => {
		getSpendPer()
	}, [spendingData])

	const toggleSwitch = () => {
		setspendLimitvisiible(!spendLimitvisiible);
		navigation.navigate('Detail')
	}
	
	const toggleFreezeCard = () => setFreezeCard(!freezeCard);
  
  return (
    <View style={[styles.container]}>
			<SafeAreaView style={styles.safeAreaView}/>
		<View style={[styles.topContainer]}>
			<AmountDetail
			title={'Debit Card'}
			balanceTitle={'Available balance'}
			amount={'3,000'}
			imageSource={resources.Logo}
			amountSymbol={'S$'}
			/>
		</View>
		<ScrollView style={[styles.lowerContainer]} showsVerticalScrollIndicator={false} contentContainerStyle={[styles.scrollContainer]}>
			<View style={styles.lowerMainContainer}>
				<View style={[styles.cardContainer]}>
					<Card
						title={'Mark Henry'}
						cardNo={'5647 3411 2413 2020'}
						cardDate={'Thru: 12/20'}
						cardCvv={'456'}
						imageSource={resources.AspireLogo}
						imageSource2={resources.VisaLogo}
					/>
				</View>
				<View style={styles.containeContainer}>
					
					<View style={styles.bottom}>
					{spendLimitvisiible && <ProgressBar
								title={'Debit card spending limit'}
								spendAmount={'$' + spendTotal}
								totalAmountAvaliable={'$' + spendLimit}
								progress={spendPer}
							/>}
						<RowItem
							title={'Top-up account'}
							imageSource={resources.insight}
							subTitle={'Deposit money to your account to use with card'}
						/>
						<RowItem
							title={'Weekly spending limit'}
							imageSource={resources.Transfermeter}
							subTitle={"you haven't set anyspending limit on card"}
							isSwitch={true}
							value={spendLimitvisiible}
							onValueChange={toggleSwitch}
							inactiveTrackColor={color._767577}
							activeTrackColor={color._01D167}
							inactiveThumbColor={color._WHITE}
							activeThumbColor={color._f4f3f4}
						/>
						<RowItem
							title={'Freeze card'}
							imageSource={resources.freezer}
							subTitle={'your debit card is currently active'}
							isSwitch={true}
							value={freezeCard}
							onValueChange={toggleFreezeCard}
							activeTrackColor={color._01D167}
							inactiveTrackColor={color._767577}
							activeThumbColor={color._f4f3f4}
							inactiveThumbColor={color._WHITE}
							
						/>
						<RowItem
							title={'Get new card'}
							imageSource={resources.Transfercard}
							subTitle={'This deactivates your currant debit card'}
						/>
						<RowItem
							title={'Deactivated cards'}
							imageSource={resources.TransferDisable}
							subTitle={'your previously deactived cards'}
						/>
						</View>
				</View>
			</View>
      	</ScrollView>
    </View>
  );
};

export default CardScreen;
