import { StyleSheet, PixelRatio, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from "../../Constants/Theme";
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
	flex1: {
		flex: 1,
		backgroundColor:color._WHITE
	},
	container: {
		flex: 1,
		paddingHorizontal: 15,

	},
	titleInfo: {
		paddingHorizontal:0,
		paddingVertical:5,

	},
	titleInfoText: {
		color: theme.LABLE_COLOR,
		fontWeight: '700',
		fontSize:wp(4.5),
	},
	inputLabel: {
		marginTop: 20,
		marginBottom: 8,
		color: theme.PRIMARY_TEXT_COLOR_WHITE,
		fontSize: wp(4), //15
	}, 
	inputView: {
		height: 100,
		borderWidth: 1,
		borderColor: theme.Input_View_Border,
		fontSize: 18,
		marginBottom: 8,
	},
	textArea: {
		marginVertical:wp(5),
	},
	uploadButton:{
		height: 40,
		backgroundColor:theme.action_Buttons_BG,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
		borderRadius:5,
	},
	uploadButtonTxt:{
		color:theme.PRIMARY_TEXT_COLOR_WHITE,
		fontSize: 16,
	},
	uploadButtonIcon:{
		fontSize: 20,
		color: theme.PRIMARY_TEXT_COLOR_WHITE,
	},
	uploadImgContainer:{
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	uploadImgCol:{
		width: (WIDTH / 3) - 16,
		height: 100,
		backgroundColor: theme.PRIMARY_CARD_BG,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		elevation: 5,
		margin: 3,
		borderWidth: 1,
		borderColor: theme.Upload_Border,
	},
	uploadedImg:{
		width: '100%',
		height: '100%',
	},
	uploadImgDeletBtn:{
		position: 'absolute',
		top: 2,
		right: 2,	
		zIndex:1200
	},
	uploadDeletBtnIcon:{
		fontSize: 20,
		backgroundColor: theme.PRIMARY_TEXT_COLOR_BLACK,
		color:theme.PRIMARY_TEXT_COLOR_WHITE,
		borderRadius: 100,
	},
	submitBtnContainer: {
		justifyContent: 'flex-end',
		padding: 15,

	},
	dropInputContainer: {
		borderColor: theme.Input_View_Border,
		borderWidth: wp(0.25),
		height: 50,
		width: '100%',
		backgroundColor:theme.PRIMARY_BG,
		justifyContent: 'center',
		paddingLeft: 10,
		borderRadius:5,
		// marginTop: wp(1.25),
	},
	dropdownIcon: {
		color:theme.LABLE_COLOR,
	},
	listStyle: {
		width: '100%',
		backgroundColor: theme.PRIMARY_BG,
		borderColor: theme.Input_View_Border,
		borderWidth: 1,
		elevation: 5,
		zIndex: 1,
		...Platform.select({
			android: {
				minHeight: 80,
				position: 'absolute',
				top: 50,
			}
		})

	},
	placeholderStyle: {
		color:theme.Leave_Type_Text, 
		fontSize: wp(4),
		fontWeight: '600',
	},
	//// modal
	buttonView1: {
		borderRadius: wp(2.5),
		overflow: 'hidden',
		backgroundColor: theme.Leave_Type_Text,

	},
	Heading: {
		fontSize: wp(4.5),
		color:theme.PRIMARY_TEXT_COLOR_BLACK,
		letterSpacing: wp(0.075), //0.3
	},
	btn1: {
		width: '100%',
		backgroundColor: theme.PRIMARY_BG,
	
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: wp(3.5),
		paddingHorizontal: wp(7.5),
	},
	middleBtn: {
		borderTopWidth: wp(0.3), //1.2
		borderBottomWidth: wp(0.3), // 1.2
		borderColor: theme.Input_View_Border,
	},
	camaraIcon: {
		fontSize: wp(5.25), //21
		color:theme.PRIMARY_TEXT_COLOR_BLACK,
		
	},
	btn1Txt: {
		fontSize: wp(4),
		color:theme.PRIMARY_TEXT_COLOR_BLACK,
		paddingLeft: wp(5),
		letterSpacing: wp(0.125),
	},
	imageIcon: {
		fontSize: wp(5.5),
		color:theme.PRIMARY_TEXT_COLOR_BLACK,

	},
	

});
export default styles;