import React from "react";
import { View, Text, FlatList,SafeAreaView } from "react-native";
import styles from "./HomeScreenStyles";
import { useSelector } from "react-redux"
import { StickButton, NoRecord } from '@Component';

const HomeScreen = ({ navigation, route }) => {
	const [data, setData] = React.useState([])
	const [refresh, setRefresh] = React.useState(false)

	const Expenditure = useSelector((state) => state.spending)

	React.useEffect(() => {
		setData(Expenditure.spendData)
		setRefresh(!refresh)
	}, [])
	React.useEffect(() => {
		setData(Expenditure.spendData)
		setRefresh(!refresh)
	}, [Expenditure.spendData])
	const goToExpense = () => {
		navigation.navigate('AddExpense')
	}

	const renderItem = ({ item }) => {
		return (
			<View style={styles.itemBox} >
				<View style={styles.itemBoxRow2} >
					<Text style={styles.dateTxt} >{item.date}</Text>
					<Text style={styles.amountTxt} >{item.amount+" $"}</Text>
				</View>
				<View style={styles.itemBoxRow} >
					<Text style={styles.titleTxt} >{item.title}</Text>
				</View><View style={styles.itemBoxRow} >
					<Text style={styles.discriptionTxt} >{item.description}</Text>
				</View>
			</View>
		)
	}
	return (
		<View style={styles.mainContainer}>
			<SafeAreaView style={styles.safeAreaView}/>
			{data.length > 0 ? <FlatList
				refreshing={refresh}
				data={data}
				renderItem={renderItem}
			/> :
				<NoRecord />}
			<StickButton onPress={() => goToExpense()} />
		</View>
	);
}



export default HomeScreen;
