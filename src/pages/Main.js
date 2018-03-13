import React, { Component } from 'react';
import {
 Platform,
 StyleSheet,ToucableOpacity,
 View,Text,BackHandler,Keyboard,
 ImageBackground,Image,StatusBar, ScrollView, KeyboardAvoidingView, AsyncStorage, Alert, NetInfo, AppState
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../../Scaling';
import VxButton from '../components/VxButton';
// import Camera from 'react-native-camera';

export default class Main extends Component{
    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            title: 'Main Page',
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: '#ef6c00' },
            headerTitleStyle: {alignSelf: 'center',marginRight:moderateScale(20,0.50), color: '#fff', fontSize:moderateScale(18, 0.5)},
            headerIconStyle: {color: '#fff'},
            tintColor: '#fff',
            gesturesEnabled: false,


        };
    };

    constructor(props) {
        Keyboard.dismiss();
        super(props)
        this.state = {

        }


    }

    

    render() {
    
 
 return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <VxButton BtnText='Dialog' />
            <VxButton BtnText='Mobitel' />
            <VxButton BtnText='Hutch' />
            <VxButton BtnText='Airtel' />
            <VxButton BtnText='Etisalat' />
        </View>
    </View>

 );
 }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     //justifyContent: 'center',
    //     backgroundColor: '#F5FCFF',
    // },
    
});