import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import i18n from 'i18n';
import Routes from './src/Routes';
import { setTopLevelNavigator } from 'services/navigationService';
import normalize from 'utils/normalize';
import store from 'store';


EStyleSheet.build({
    $rem: normalize(1),
});

class App extends Component {

    onRoutesRef = (navigatorRef) => {
        setTopLevelNavigator(navigatorRef);
    }

    render() {
        return (
            <Provider store={store}>
                <Routes ref={this.onRoutesRef} />
            </Provider>
        );
    }
}


export default App;
