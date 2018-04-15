import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from '../Style/IOS';

export default class AboutUsScreen extends Component {

    static navigationOptions = {
        title: 'Tentang Kami',
    };

    render() {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.textWrapper}>
                    Aplikasi Kas Online ini adalah aplikasi yang berguna untuk
                </Text>
            </View>
        );
    }
}