import { StyleSheet,} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
const styles = StyleSheet.create({
	plusButton: {
		position:'absolute',
		right:15,
		bottom:15,
		width:wp(11.25),
		height:wp(11.25),
		backgroundColor: color._0075bf,
		borderRadius: wp(50),
		justifyContent:'center',
		alignItems:'center',
	},
	plusButtonView:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,

		elevation: 8,
	},
	iconStyle: {
		fontSize: wp(10),
		color:'#fff',
	}

});
export default styles;

