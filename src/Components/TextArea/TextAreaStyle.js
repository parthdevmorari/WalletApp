import { StyleSheet, Dimensions,} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from "../../Constants/Theme";

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	indexContainer:{
		flex: 1,
		marginBottom:wp(5),
    },
    labelCol:{
        marginBottom: 5,
	},
	label:{
        color: theme.LABLE_COLOR,
		fontWeight: '700',
		fontSize:wp(4),
    },
    InputCol:{
        backgroundColor: '#fff',
		borderColor: '#fff',
		width: '100%',
		borderRadius: 0,
		marginBottom: 0,
		borderColor:theme.PRIMARY_BORDER_COLOR,
		borderBottomWidth:1,

    },
    
    indexInput:{
        textAlignVertical: 'top',
		fontSize: wp(4),
		color:theme.PRIMARY_TEXT_COLOR_BLACK,
		borderStyle: 'solid',
        minHeight: 100,
        maxHeight: 'auto',
		borderColor:theme.PRIMARY_BORDER_COLOR,
    },
    

});
export default styles;

