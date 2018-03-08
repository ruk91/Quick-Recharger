import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,View
} from 'react-native'
import { Grid, Col, Row, } from 'react-native-easy-grid';
import MAIcon from 'react-native-vector-icons/MaterialIcons'
import { scale, moderateScale, verticalScale} from '../../Scaling';
import FEIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
export default class VxIconWithLabel extends Component {

  render () {
    let labelText = this.props.labelText
    let iconName = this.props.iconName

    return (
      <Grid>
                <Col>
                    <View style={{marginBottom:moderateScale(5, 0.25), marginTop:moderateScale(10, 0.25)}}>
                        <TouchableOpacity onPress={this.props.onPress}>
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <FAIcon name={iconName} size={moderateScale(20, 0.75)} color="#fff" />
                        </View>
                        <View style={{alignItems: 'center',justifyContent: 'center', }}>
                            <Text  style={{color:'#FFF',fontSize: moderateScale(15, 0.4),textAlign:'center',justifyContent: 'center',marginTop:moderateScale(2, 0.25)}}>{labelText}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </Col>
            </Grid>

    )
  }
}

const styles = StyleSheet.create({
    top:{
        backgroundColor: "rgba(255, 255, 255, 0.2)", 
        borderTopLeftRadius:5, 
        borderTopRightRadius:5,
        height: moderateScale(42 , 0.6),
      },
      bottom:{
        //backgroundColor: {this.props.cardColor}, 
        borderBottomLeftRadius:5, 
        borderBottomRightRadius:5,
        height: moderateScale(42 , 0.6),
      },
      text:{
        color:'#fff',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 5,
        fontSize: moderateScale(15, 0.4),
        marginTop: moderateScale(14, 0.25),
      }
})
