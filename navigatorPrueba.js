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
import Icon from 'react-native-vector-icons/FontAwesome';

import LoadingScreen from './src/components/Loading';
import DrawerC from './src/components/DrawerComponent';
import LogoHeader from './src/components/LogoHeader';
import Loader from './src/components/Loader';
import PostHome from './src/Screens/HomeSreen/PostHome';
import CreateUserScreen from './src/Screens/CreateUserScreen';
import Dark from './src/Screens/DarkStlye';
import NewPost from './src/Screens/HomeSreen/NewPost';
const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        headerTintColor: Dark.HeaderTitle,
      },
      headerMode: 'float',
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Dark.HeaderBackground,
        height: 40,
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
    },
    cardStyle: {backgroundColor: Dark.CardBackground},
  },
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerLeft: <LogoHeader />,
        headerTintColor: Dark.HeaderTitle,
      },
    },
    PostHome: {
      screen: PostHome,
      navigationOptions: {
        title: 'POST',
        headerTintColor: Dark.HeaderTitle,
      },
    },
    newPost: {
      screen: NewPost,
      navigationOptions: {
        title: 'NewPost',
        headerTintColor: Dark.HeaderTitle,
        headerLeft: <LogoHeader />,
        headerRight: <Header />,
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Dark.HeaderBackground,
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <Header />,
    },
    cardStyle: {backgroundColor: Dark.CardBackground},
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Users',
        headerTintColor: Dark.HeaderTitle,
        headerLeft: <LogoHeader />,
        headerRight: <Header />,
      },
    },
    CreateUser: {
      screen: CreateUserScreen,
      navigationOptions: {
        title: 'Create User',
        headerTintColor: Dark.HeaderTitle,
        headerMode: 'none',
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Dark.HeaderBackground,
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },

      //headerLeft: <LogoHeader />,
    },
    cardStyle: {backgroundColor: Dark.CardBackground},
  },
);
const MessagesStack = createStackNavigator(
  {
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        title: 'Messages',
        headerTintColor: Dark.HeaderTitle,
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Dark.HeaderBackground,
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <Header />,
      headerLeft: <LogoHeader />,
    },
    cardStyle: {backgroundColor: Dark.CardBackground},
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
        tabBarIcon: <Icon name="home" size={25} color="white" />,
      },
    },
    Users: {
      screen: ProfileStack,

      navigationOptions: {
        tabBarIcon: <Icon name="user" size={25} color="white" />,
      },
    },
    /*     Messages: {
      screen: MessagesStack,
      swipeEnable: true,
      navigationOptions: {
        tabBarIcon: <Icon name="envelope" size={25} color="white" />,
      },
    }, */
  },
  {
    tabBarOptions: {
      // shifting: true,
      activeTintColor: '#f44336',
      animationsEnabled: true,
      style: {
        showLabel: false,
        backgroundColor: Dark.TabBarBackground,
      },
    },
  },
);

const Drawer = createDrawerNavigator(
  {
    Main: BottomTabNavigator,
  },
  {
    contentComponent: DrawerC,
    drawerBackgroundColor: '#363532',
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
    Loading: LoadingScreen,
    App: Drawer,
    Login: AuthNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default AppNavigator;
