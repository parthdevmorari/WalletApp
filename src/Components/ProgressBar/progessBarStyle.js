import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../Constants/Color'
import { theme } from '../../Constants/Theme'
const styles = StyleSheet.create({

    spendContainer:{
		width: 366,
		height: 41,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	spendTxt:{
		color: "#222222",
		fontSize: 13,
		marginLeft: 24,
		marginTop: 20,
		fontWeight: "bold",
	},
	spendTxt2:{
		color: "#01D167",
		fontSize: 13,
		marginTop: 20,
		fontWeight: "bold",
		paddingRight: wp(2.5) ,
	},
	totalAmount:{
		color: "grey",
		fontSize: 13,
		marginTop: 20,
		fontWeight: "bold",
		paddingHorizontal: wp(6)
	},
	amountBox :{
		flexDirection : "row",
	},


});
export default styles;