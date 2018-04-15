
import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {
    View,
    Text,
} from 'react-native';
import styles from '../Style/IOS';
/*import QRCode from 'react-native-qrcode';*/
export default class QRCodeScreen extends Component{

    static navigationOptions = {
        title: 'QRCode',
    };

    render() {
        return (
            <View style={styles.formContainer}>

            </View>
        );
    }
}