import React, {Component} from 'react';
import {TextField} from 'react-native-material-textfield';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { SocialIcon } from 'react-native-elements'

import styles from '../Style/IOS';

export default class LoginScreen extends Component {

    static navigationOptions = {
        title: 'Masuk',
    };

    render() {

        const usernameAttribute = {
            label: 'Nomor Handphone',
            baseColor: '#FFFFFF',
            textColor: '#FFFFFF',
            tintColor: '#EEEFEA',
            labelFontSize: 12,
            fontSize: 14
        };

        const passwordAttribute = {
            label: 'Kata Sandi',
            baseColor: '#FFFFFF',
            textColor: '#FFFFFF',
            tintColor: '#EEEFEA',
            labelFontSize: 12,
            fontSize: 14,
            secureTextEntry: true
        };

        return (
            <View style={styles.formContainer}>
                <View style={{marginTop: 20}}>
                    <SocialIcon
                        title='Masuk dengan Facebook'
                        button
                        type='facebook'
                        style={{padding: 20}}
                    />

                    <SocialIcon
                        title='Masuk dengan Google'
                        button
                        type='google'
                        style={{padding: 20}}
                    />
                </View>
                <View>
                    <Text style={styles.headerText}>
                        Masuk dengan akun
                    </Text>
                </View>
                <View>
                    <TextField {...usernameAttribute} />
                    <TextField {...passwordAttribute} />
                </View>
                <View style={{alignSelf: 'center', marginTop:20}}>
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={
                            () => {

                            }
                        }
                        underlayColor='#fff'>
                        <Text style={styles.buttonPrimaryText}>
                            Masuk
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}