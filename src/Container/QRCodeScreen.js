import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../Style/IOS';

export default class QRCodeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: []
        };
    }

    static navigationOptions = {
        title: 'QRCode',
    };



    onDelete = () => {
        console.log('Pressing on delete')
    };

    componentDidMount() {

        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((response) => {
            // Save data from response to state.
                this.setState({movie: response.movies})
            })
            .catch((error) => {
                console.error(error);
        });

    }

    render() {

        console.log('this.state.movie');
        console.log(this.state.movie);

        return (
            <View style={styles.formContainer}>

                <TouchableOpacity>
                    <Text>POST</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>PUT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onDelete}>
                    <Text>DELETE</Text>
                </TouchableOpacity>


                {
                    /* this.state.movie.map((key, index) => {
                        return (
                            <Text key={index}>{key.id}</Text>
                        );
                    }) */
                }
            </View>
        );
    }
}