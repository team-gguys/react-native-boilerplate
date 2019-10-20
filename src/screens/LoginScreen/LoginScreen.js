import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './LoginScreen.styles';


export class LoginScreen extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>LoginScreen</Text>
            </View>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
