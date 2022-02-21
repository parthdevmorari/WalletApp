import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../Constants/Color'
import { theme } from '../../Constants/Theme'
const styles = StyleSheet.create({

	rowContainer: {
		paddingLeft:wp(6),
		flexDirection: "row",
		overflow: "hidden",
		justifyContent: "space-between",
		paddingBottom: wp(8),
		paddingTop: wp(3)

	},
	row: {
		flexDirection: "row",
	},
	iconContainer : {
		width: 32,
		height: 32,
	},
	containeContainer : {
		paddingLeft: wp(2.5),
	},
	switchContainer : {
		paddingLeft: wp(3.75),
		justifyContent: "center"
	},
	
	swtichStyle: {
		width: 34,
		height: 20,
		marginRight: 24
	},
	titleTxt: {
		fontSize : 14,
		textAlign: "left",
		fontWeight: "bold",
		color: "#25345F",
		fontFamily: "Avenir Next"
	},
	subTitleTxt: {
		fontSize : wp(3),
		textAlign: "left",
		color: "#222222",
		opacity: 40,
		fontFamily: "Avenir Next"
	},


});
export default styles;