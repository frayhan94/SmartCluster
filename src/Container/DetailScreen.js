import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

export default class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Text>Faris Rayhan 123</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}