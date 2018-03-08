import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ImageBackground,Image,
  View,StatusBar,TouchableOpacity,TextInput,Button
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../scaling/Scaling';

export default class VxTextBox extends Component<{}> {

  render() {
    return (
        <View>
            <TextInput style={styles.inputBox} placeholder={this.props.placeholder}
                placeholderTextColor='#fff'
                underlineColorAndroid='rgba(0, 0, 0, 0)'
                selectionColor='#fff'
                onChangeText = {this.props.onChangeText}
                secureTextEntry = {this.props.secureTextEntry}
                keyboardType={this.props.keyboardType}
                maxLength={this.props.maxLength}
                onBlur={this.props.onBlur}
                ref={this.props.ref}


                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}

                onSubmitEditing={this.props.onSubmitEditing}
                autoCorrect={this.props.autoCorrect}

            />
        </View>
    )}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: moderateScale(320, 1.00),  
    height:moderateScale(40,0.60),
    fontSize:moderateScale(15, 0.5),
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 25,
    borderColor: '#fff',
    paddingHorizontal: 16,
    color: '#fff',
    marginVertical: 5
  }
});
