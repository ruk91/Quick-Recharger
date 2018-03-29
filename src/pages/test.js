import React, { Component } from 'react';
import {
 Platform,
 StyleSheet,ToucableOpacity,
 View,Text,BackHandler,Keyboard,
 ImageBackground,Image,StatusBar, ScrollView, KeyboardAvoidingView, AsyncStorage, Alert, NetInfo, AppState
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../../Scaling';
import VxButton from '../components/VxButton';

import Camera from 'react-native-openalpr';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: 100,
    left: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default class PlateRecognizer extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
      },
      plate: 'Scan a plate',
    };
  }

  onPlateRecognized = ({ plate, confidence }) => {
    if (confidence > 90) {
      this.setState({
        plate,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureQuality={Camera.constants.CaptureQuality.medium}
          country="us"
          onPlateRecognized={this.onPlateRecognized}
          plateOutlineColor="#ff0000"
          showPlateOutline
          torchMode={Camera.constants.TorchMode.off}
          touchToFocus
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.plate}</Text>
        </View>
      </View>

    );
  }
}

AppRegistry.registerComponent('PlateRecognizer', () => PlateRecognizer);