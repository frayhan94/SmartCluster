import React from 'react';

import {StackNavigator} from 'react-navigation';

import Loader from 'react-native-mask-loader';

import {
    YellowBox,
    StyleSheet,
    View,
}
    from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import {
    DetailsScreen,
    LoginScreen,
    RegisterScreen,
    QRCodeScreen,
    HomeScreen,
    GenerateQRCodeScreen,
    TermsAndConditionScreen,
    AboutUsScreen
} from './src/Container/index'

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loadingBackgroundStyle: {
        backgroundColor: '#B93523',
    },
});


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
        },
        TermsAndCondition: {
            screen: TermsAndConditionScreen,
        },
        AboutUs: {
            screen: AboutUsScreen,
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
            headerBackTitle: ' '
        },
    }
);

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appReady: false,
            rootKey: Math.random()
        }
        this._image = require('./src/asset/twitter.png');
    }

    componentDidMount() {
        this.resetAnimation();
    }

    resetAnimation() {
        this.setState({
            appReady: false,
            rootKey: Math.random()
        });

        setTimeout(() => {
            this.setState({
                appReady: true,
            });
        }, 1000);
    }

    render() {
        return (
            <View key={this.state.rootKey} style={styles.root}>
                <Loader
                    isLoaded={this.state.appReady}
                    imageSource={this._image}
                    backgroundStyle={styles.loadingBackgroundStyle}
                >
                    <RootStack />
                </Loader>
            </View>
        );
    }
}

