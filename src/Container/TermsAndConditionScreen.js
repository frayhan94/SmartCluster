import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from '../Style/IOS';

export default class TermsAndConditionScreen extends Component {

    static navigationOptions = {
        title: 'Syarat dan Ketentuan',
    };

    render() {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.textWrapper}>
                    Pemakai aplikasi ini berhak tunduk dan taat terhadap peraturan yang
                    berlaku di dalamnya
                </Text>
            </View>
        );
    }
}