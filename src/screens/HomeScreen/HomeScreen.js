import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './HomeScreen.styles';

import { navigate } from 'services/navigationService';


export class HomeScreen extends PureComponent {

    onButtonPressed = () => {
        navigate(['LoginScreen']);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home screen</Text>

                <TouchableOpacity style={styles.button} onPress={this.onButtonPressed}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
