/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';

import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import MessagesScreen from './src/Screens/MessagesScreen';
import Header from './src/components/Header';
import RegisterScreen from './src/Screens/RegisterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Loading from './src/components/Loading';
import DrawerC from './src/components/DrawerComponent';
import LogoHeader from './src/components/LogoHeader';
import DrawScreen from './src/components/DrawerComponent';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerLeft: <LogoHeader />,

        title: 'Login',

        headerStyle: {
          backgroundColor: 'white',
          height: 45,
        }, //color Header
        headerTintColor: 'black', //color letra header
        //gesturesEnabled: true, // activa los slides
      },
      headerMode: 'float',
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Register',
        headerStyle: {backgroundColor: 'white', height: 45}, //color Header
        headerTintColor: 'black', //color letra header
        //gesturesEnabled: true, // activa los slides
      },
      mode: 'card',
    },
  },
  {
    //opciones generales
    navigationOptions: {
      headerStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <Header />,
      headerLeft: <LogoHeader />,
    },
    cardStyle: {backgroundColor: 'white'},
  },
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <Header />,
      headerLeft: <LogoHeader />,
    },
    cardStyle: {backgroundColor: 'white'},
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,

      navigationOptions: {
        title: 'Profiless',
      },
      headerLayoutPreset: 'center',
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <Header />,
      headerLeft: <LogoHeader />,
    },
    cardStyle: {backgroundColor: 'white'},
  },
);
const MessagesStack = createStackNavigator(
  {
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        title: 'Messages',
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <Header />,
      headerLeft: <LogoHeader />,
    },
    cardStyle: {backgroundColor: 'white'},
  },
);
/* const Main = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Perfil',
      },
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        title: 'Ajustes',
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {backgroundColor: 'white', height: 45},
      headerRight: <Header />,
      headerLeft: <LogoHeader />,
    },

    headerLayoutPreset: 'center',
    cardStyle: {backgroundColor: 'white'},
  },
);
 */
const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: <Icon name="home" size={30} color="black" />,
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: <Icon name="user" size={30} color="black" />,
      },
    },
    Messages: {
      screen: MessagesStack,
      navigationOptions: {
        tabBarIcon: <Icon name="envelope" size={30} color="black" />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#E8E2EF',
        height: 40,
      },
    },
  },
);

const WithModal = createStackNavigator(
  {
    Main: {
      screen: BottomTabNavigator,
      ProfileStack,
      MessagesStack,
      HomeStack,
    },
  },
  {
    mode: 'card',
    headerMode: 'none',

    cardStyle: {
      backgroundColor: 'white',
    },
  },
);

const Drawer = createDrawerNavigator(
  {
    Main: WithModal,
  },
  {
    contentComponent: DrawerC,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },

    drawerPosition: 'right',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    App: Drawer,
    Login: AuthNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
