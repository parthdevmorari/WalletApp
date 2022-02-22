import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator,Animated,Easing } from 'react-native';


const Loader = props => {
	const {loading} = props;
	
	const animation = React.useRef();
	const [progress, setprogress] = React.useState(new Animated.Value(0));
	React.useEffect(() => {
			
			//   animation.current.play();
			//  animation.current.play(30, 120);
		
	});
    return (
        <Modal
            visible={loading}
			transparent={true}
			animationType={'none'}
        >
            <View style={{backgroundColor: 'rgba(0,0,0,0.50)', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#000000"/>
				
			</View>
        </Modal>
    )
}
const styles = StyleSheet.create({});
export default Loader;
