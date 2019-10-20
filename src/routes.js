import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from 'screens/HomeScreen/HomeScreen';
import LoginScreen from 'screens/LoginScreen/LoginScreen';


const Routes = createStackNavigator({
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
}, {
    initialRouteName: 'HomeScreen',
});

  
export default createAppContainer(Routes);
