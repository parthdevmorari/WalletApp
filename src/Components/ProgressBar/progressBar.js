import { View, Text } from 'react-native'
import React from 'react'
import styles from './progessBarStyle'

const progressBar = (props) => {
    const { title,spendAmount,totalAmountAvaliable } = props;

  return (
    <View style={[styles.spendContainer]}>
                <Text style={[styles.spendTxt]}>{title}</Text>
                <View style = {styles.amountBox}>
                <Text style={[styles.spendTxt2]}>{spendAmount}</Text>
                <Text style={[styles.totalAmount]}>{totalAmountAvaliable}</Text>
                </View>
            </View>
  )
}

export default progressBar