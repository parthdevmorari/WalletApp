import { View, Text, Image, TouchableOpacity, Switch, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import styles from '../Screens/HomeScreen/HomeScreenStyles'
import { RowItem, ProgressBar } from '@Component'
import * as resources from 'resources';
import { color } from '../Constants/Color'
import {Card, AmountDetail } from '@Component'


const Details = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={[styles.lowerContainer]}>
        <View style={[styles.cardContainer]}>
            <Card
			title = {'Mark Henry'}
			cardNo= {'5647 3411 2413 2020'}
			cardDate = {'Thru: 12/20'}
			cardCvv = {'456'}
			imageSource = {resources.AspireLogo}
			imageSource2 = {resources.VisaLogo}
			/>
            </View>
            <ProgressBar
            title = {'Debit card spending limit'}
            spendAmount = {'$345'}
            totalAmountAvaliable = {'$5,000'}
            />
            <View style={styles.bottom}>
            <RowItem
                title={'Top-up account'}
                imageSource={resources.insight}
                subTitle={'Deposit money to your account to use with card'}
                isSwitch={true}
                value={isEnabled}
                onValueChange={toggleSwitch}
                inactiveTrackColor={color._767577}
                activeTrackColor={color._01D167}
                inactiveThumbColor={color._WHITE}
                activeThumbColor={color._f4f3f4}
            />

           

            
</View>
        </View>
    )
}

export default Details