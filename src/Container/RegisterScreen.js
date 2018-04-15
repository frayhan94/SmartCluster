import React, {Component} from 'react';
import {TextField} from 'react-native-material-textfield';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {SocialIcon} from 'react-native-elements'
import styles from '../Style/IOS';

export default class Index extends Component {

    static navigationOptions = {
        title: 'Daftar',
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    render() {

        const fullnameAttribute = {
            label: 'Nama Lengkap',
            baseColor: '#FFFFFF',
            textColor: '#FFFFFF',
            tintColor: '#EEEFEA',
            labelFontSize: 12,
            fontSize: 14
        };

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

        const confirmPasswordAttribute = {
            label: 'Konfirmasi Kata Sandi',
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
                        title='Daftar dengan Facebook'
                        button
                        type='facebook'
                        style={{padding: 20}}
                    />

                    <SocialIcon
                        title='Daftar dengan Google'
                        button
                        type='google'
                        style={{padding: 20}}
                    />
                </View>
                <View>
                    <Text style={styles.headerText}>
                        Daftar dengan akun
                    </Text>
                </View>
                <View>
                    <TextField {...fullnameAttribute} />
                    <TextField {...usernameAttribute} />
                    <TextField {...passwordAttribute} />
                    <TextField {...confirmPasswordAttribute} />
                </View>
                <View style={{alignSelf: 'center', marginTop: 20}}>
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={
                            () => {

                            }
                        }
                        underlayColor='#fff'>
                        <Text style={styles.buttonPrimaryText}>
                            Daftar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}