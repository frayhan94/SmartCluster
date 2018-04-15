import React from 'react';

import { StackNavigator } from 'react-navigation';

import {
    YellowBox
} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import {
    DetailsScreen,
    LoginScreen,
    RegisterScreen,
    QRCodeScreen,
    HomeScreen,
    GenerateQRCodeScreen
} from './src/Container/index'

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
        Login: {
            screen: LoginScreen,
        },
        Register: {
            screen: RegisterScreen,
        },
        QRCode: {
            screen: QRCodeScreen,
        },
        GenerateQRCode: {
            screen: GenerateQRCodeScreen,
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#912719',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle:' '
        },
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

