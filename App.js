import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AsyncStorage,
  Keyboard
} from 'react-native';
import Main from './src/pages/Main';
import { StackNavigator, DrawerNavigator, NavigationActions,Icon } from 'react-navigation';
// import MAIcon from 'react-native-vector-icons/MaterialIcons'
// import SplashScreen from 'react-native-splash-screen';

export default class App extends Component<{}> {
  static navigationOptions = {
    header: null,
    };

    constructor(props) {
        Keyboard.dismiss();
          super(props)
            this.state = {
              initialRoute: ''
            }
    }

    



    render() {
      Text.defaultProps.allowFontScaling=false
      const MainNavigator = StackNavigator({
        Main: { screen: Main },
      
      })
      return <MainNavigator />       

  }

}
