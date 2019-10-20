import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import styles from './HomeScreen.styles';

import { navigate } from 'services/navigationService';


export class HomeScreen extends PureComponent {

    onChangeLangButtonPressed = () => {
        this.props.i18n.changeLanguage('ja');
    }

    onLoginButtonPressed = () => {
        navigate(['LoginScreen']);
    }

    render() {
        const { t } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{t('LoginScreen.email_or_phone_number')}</Text>

                <TouchableOpacity style={styles.button} onPress={this.onChangeLangButtonPressed}>
                    <Text>Change language</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.onLoginButtonPressed}>
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

export default (connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomeScreen)));
