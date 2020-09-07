import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { fromRight } from 'react-navigation-transitions';
import HomeScreen from '../Home';
import SlideMenu from '../SlideMenu';

const { width } = Dimensions.get('window');

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null,
        drawerLockMode: 'locked-open',
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => fromRight(500),
    //edit transition config between screen
    // transitionConfig: (toScreen, fromScreen) => {
    //   if (toScreen != null) {
    //     const index = toScreen.navigation.state.index;
    //     const routes = toScreen.navigation.state.routes;
    //     if (index && routes && routes.length > index) {
    //       if (routes[index].routeName === 'Detail') {
    //         return fromLeft(500);
    //       }
    //     }
    //   }
    //   return fromRight(500);
    // },
  },
);

stackNavigator.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed';
  }
  return {
    drawerLockMode,
  };
};
const MyDrawerNavigator = createDrawerNavigator(
  {
    stackNavigator,
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
      drawerLockMode: 'locked-open',
    },
    contentComponent: SlideMenu,
    drawerBackgroundColor: 'white',
    drawerWidth: width - 30,
    drawerPosition: 'right',
  },
);

const MyApp = createAppContainer(MyDrawerNavigator);
export default MyApp;
