import * as React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { theme } from '../Constants/Theme';
import { color } from '../Constants/Color';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/EvilIcons';
import Icon6 from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import CardScreen from '../Screens/CardScreen';
import PaymentScreen from '../Screens/PaymentScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import AddExpenseScreen from '../Screens/AddExpenseScreen'

const Stack = createStackNavigator();
const platform = Platform.OS;
const Tab = createMaterialBottomTabNavigator();

function MyTab({ navigation }) {
	return (
		<Tab.Navigator
			headerMode={'none'}
			initialRouteName="Home"
			activeColor={theme.THEME_COLOR}
			inactiveColor={color._ccc}
			barStyle={{
				backgroundColor: theme.Bottom_Tab_BG,
				borderTopColor: theme.PRIMARY_BORDER_COLOR,
				borderTopWidth: 0.5,
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Icon name={'home'} size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Card"
				component={CardScreen}
				options={{
					tabBarLabel: 'Debit Card',
					tabBarIcon: ({ color, size }) => (
						<Icon5 name={'credit-card'} size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Payment"
				component={PaymentScreen}
				options={{
					tabBarLabel: 'Payment',
					tabBarIcon: ({ color, size }) => (
						<Icon2 name={'swap'} size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Detail"
				component={DetailScreen}
				options={{
					tabBarLabel: 'Credit',
					tabBarIcon: ({ color, size }) => (
						<Icon6 name={'arrow-up-circle-sharp'} size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<Icon3 name={'user'} size={25} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
		
	);
  }

export const navigationRef = React.createRef();

export default function Navigation(props) {
	const routeNameRef = React.useRef();
	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() =>
				(routeNameRef.current = navigationRef.current.getCurrentRoute().name)
			}
			onStateChange={() => {
				const previousRouteName = routeNameRef.current;
				const currentRouteName = navigationRef.current.getCurrentRoute().name;
				props.setCurrentRouteName(currentRouteName);
			}}>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
				{/* <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> */}
				<Stack.Screen options={{ headerShown: false }} name="MyTab" component={MyTab} /> 
				<Stack.Screen options={{ headerShown: false }} name="CardScreen" component={CardScreen} /> 
				<Stack.Screen options={{ headerShown: false }} name="AddExpense" component={AddExpenseScreen} /> 
				<Stack.Screen options={{ headerShown: false ,headerStyle: {
        backgroundColor: color._0C365A,
      }, headerTintColor: '#fff',}} name="Detail" component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
