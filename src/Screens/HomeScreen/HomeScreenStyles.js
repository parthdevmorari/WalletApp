import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0C365A',
	},
	mainContainer:{
	position:'absolute',
	bottom:20,
	backgroundColor: '#0C365A',

	// zIndex:2222
	},
	nameText:{
		fontSize: 22,
		color: "#FFFFFF",
		fontWeight: "bold",
		marginTop: 69,
		marginLeft:24,
		height:30,
		width: 134
	},
	NumberText: {
		fontSize: 14,
		color:"#FFFFFF",
		marginTop: 20,
		marginLeft:24,
		fontWeight: "400",
		fontFamily: "Avenir Next",
		letterSpacing: 5

	},
	txtContainer: {
		flexDirection: "row",
		width: 176,
		height: 17, 
		marginLeft: 26,
		marginTop: 12,
	},
	dateText: {
		fontSize: 13,
		textAlign: "left",
		width:81,
		height: 17,
		fontFamily: "AvenirNext",
		color:"#FFFFFF",
		fontWeight: "normal"
	},
	cvvText: {
		fontSize: 13,
		marginLeft: 10,
		color:"#FFFFFF",
	},
	lowerContainer:{
		flex:1, 
	},
	cardContainer:{
		flex:1,
zIndex:1000
		
	},
	bottom:{
		backgroundColor:color._WHITE,
		flex:1,
		borderTopLeftRadius: wp(6),
		borderTopRightRadius: wp(6),

	},
	rowContainer: {
		flexDirection: "row",
		overflow: "hidden",
		justifyContent: "space-between",

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
		// backgroundColor: "red",
		justifyContent: "center"
	},
	imgStyle:{
		
	},
	items2: {
		width: 327,
		height: 41,
		marginLeft: 24,
		marginRight:63,
		marginTop: 60,
	},
	swtichContainer: {
		width: 366,
		height: 41,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	swtichStyle: {
		width: 34,
		height: 20,
		marginRight: 24
	},
	itemsTxt: {
		fontSize : 14,
		textAlign: "left",
		fontWeight: "bold",
		color: "#25345F",
		fontFamily: "Avenir Next"
	},
	subTxt: {
		fontSize : wp(3),
		textAlign: "left",
		color: "#222222",
		opacity: 40,
		fontFamily: "Avenir Next"
	},
	emptyTxt: {
		fontSize:wp(4.5),
		alignSelf:'center',
		textAlign:'center',
		fontWeight:'900',
		color:color._WHITE
	},
	mainRow:{
		backgroundColor:theme.THEME_COLOR,
		width: '100%',
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 1,
	},
	twoColumnView:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'center',
	},
	priceView:{
		// a: 'center',
		justifyContent: 'space-between',
	},
	priceText:{
		color:color._01baf2	,
		fontSize:wp(3),
	},
	textTitle:{
		color:color._WHITE,
		fontSize:wp(3),
		fontWeight: '900',
		marginBottom: 3,
	},
	text:{
		color:color._01baf2	,
		fontSize:wp(3),
	},
	
});
export default styles;