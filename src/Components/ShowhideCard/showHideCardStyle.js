

import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../Constants/Color'
import { theme } from '../../Constants/Theme'
const styles = StyleSheet.create({
    
	showContainer: {
        backgroundColor: color._WHITE,
        paddingHorizontal: wp(5),
        paddingBottom: wp(5.5),
        borderTopLeftRadius: wp(1.2),
        borderTopRightRadius: wp(1.2),
        alignSelf: "flex-end",
        flexDirection:'row',
        alignItems:'center'

    },
    txt: {
        color: color._01D167,
        textAlign: "center",
        paddingLeft: wp(1.25),
        fontSize: wp(3),
        fontFamily: "AvenirNext",

    },
    imageContainer: {
        width : wp(5),
        height: wp(5),

    },
    imgStyle: {
        width : "100%",
        height: "100%",
    }


});
export default styles;