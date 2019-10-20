import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './HomeScreen.styles';


export class HomeScreen extends PureComponent {

    render() {
        return (
            <View>
                <Text>Home screen</Text>
            </View>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
