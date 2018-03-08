import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { scale, moderateScale, verticalScale} from '../scaling/Scaling'

export default class VxSmallButton extends Component {
  render () {
    let btnText = this.props.BtnText
     let navigateTo = this.props.PageNavigation
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress} navigation={this.props.navigation}>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: moderateScale(130, 0.50),
    height: moderateScale(35, 0.5),
    backgroundColor: '#ef6c00',
    borderRadius: 25,
    borderStyle: 'solid',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(10, 0.25)
  },
  buttonText: {
    fontSize: moderateScale(15, 0.4),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
})
