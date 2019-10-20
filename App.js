import React, { Component } from 'react';
import { Provider } from 'react-redux';

import HomeScreen from 'screens/HomeScreen/HomeScreen';
import store from 'store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        );
    }
}


export default App;
