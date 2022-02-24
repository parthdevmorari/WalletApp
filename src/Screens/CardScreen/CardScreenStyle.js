import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
const styles = StyleSheet.create({
	container: {
		height:hp(100),
		backgroundColor:color._0C365A,
	},
	topContainer:{
		width: '100%',
		height: hp(25),
		position: 'absolute',
		top: 0, 
		left: 0,
		backgroundColor:color._0C365A,
		zIndex: 0, 
	},
	scrollContainer:{
		width: '100%',	
		paddingTop: hp(25),
		zIndex: 2, 
		backgroundColor: 'transparent'
	},
	lowerContainer:{
		height: hp(85),
	},
	cardContainer:{
		height:wp(25),
		zIndex: 2, 
	},
	containeContainer : {
	},
	bottom:{
		paddingTop:hp(20),
		backgroundColor: color._WHITE,
		borderTopLeftRadius: wp(6),
		borderTopRightRadius: wp(6),

	},
	
});
export default styles;