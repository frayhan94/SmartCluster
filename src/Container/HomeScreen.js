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
                <View>
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
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <Text
                        style={{color: '#FFFEFC'}}
                        onPress={
                        () => {
                            this.props.navigation.navigate('AboutUs')
                        }
                    }>
                        Tentang Kami
                    </Text>
                    <Text
                        style={
                            {
                                color: '#FFFEFC',
                                marginLeft: 10
                            }
                        }
                        onPress={
                        () => {
                            this.props.navigation.navigate('TermsAndCondition')
                        }
                    }>
                        Syarat Dan Ketentuan
                    </Text>
                </View>
            </View>
        );
    }
}