import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';


import styles from '../Style/IOS';
import React, {Component} from 'react';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'KAS Online',
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Login')
                        }
                    }
                    underlayColor='#fff'>
                    <Text style={styles.buttonPrimaryText}>Masuk</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Register')
                        }
                    }
                    underlayColor='#fff'>
                    <Text style={styles.buttonPrimaryText}>Daftar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={
                        () => {
                            this.props.navigation.navigate('QRCode')
                        }
                    }
                    underlayColor='#fff'>
                    <Text style={styles.buttonPrimaryText}>Scan QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonPrimary}
                    onPress={
                        () => {
                            this.props.navigation.navigate('GenerateQRCode')
                        }
                    }
                    underlayColor='#fff'>
                    <Text style={styles.buttonPrimaryText}>Hasilkan QR Code</Text>
                </TouchableOpacity>
            </View>
        );
    }
}