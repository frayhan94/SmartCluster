import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import styles from '../Style/IOS';

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