import React, {Component} from 'react';
import QRCode from 'react-native-qrcode';
import {TextField} from 'react-native-material-textfield';
import {
    View,
    Share,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../Style/IOS';

export default class GenerateQRCodeScreen extends Component {

    static navigationOptions = {
        title: 'Hasilkan QRCode',
    };

    constructor(props) {
        super(props);
        this.state = {
            QRCodeValue: 'http://google.com'
        }
    }

    render() {

        const qrCodeValueAttribute = {
            label: 'Nilai QR Code',
            baseColor: '#FFFFFF',
            textColor: '#FFFFFF',
            tintColor: '#EEEFEA',
            labelFontSize: 12,
            fontSize: 14,
            onChangeText: (text) => {
                this.setState({
                    QRCodeValue: text
                })
            }
        };

        const {QRCodeValue} = this.state;

        return (
            <View style={styles.formContainer}>
                <TextField {...qrCodeValueAttribute} />

                <View style={{alignSelf: 'center', marginTop: 20}}>
                    <QRCode
                        value={QRCodeValue}
                        size={200}
                        bgColor='purple'
                        fgColor='white'/>
                </View>

                <View style={{alignSelf: 'center', marginTop: 20}}>
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={
                            () => {
                                Share.share({
                                    message: 'Sample message for IOS',
                                    url: 'http://sample-message-ios.com',
                                    title: 'This is the title of IOS sample message'
                                }, {
                                    // Android only:
                                    dialogTitle: 'Sample message for android',
                                    // iOS only:
                                    excludedActivityTypes: [
                                        'com.apple.UIKit.activity.PostToTwitter'
                                    ]
                                })
                            }
                        }
                        underlayColor='#fff'>
                        <Text style={styles.buttonPrimaryText}>
                            Bagikan
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}