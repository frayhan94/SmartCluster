import React from 'react';

import { StackNavigator } from 'react-navigation';

import {
    DetailsScreen,
    LoginScreen,
    RegisterScreen,
    QRCodeScreen,
    HomeScreen
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

