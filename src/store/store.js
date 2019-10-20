import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { all } from 'redux-saga/effects';
import _ from 'lodash';

// Reducers
import globalReducer from './global/reducer';
// import userReducer from './user/reducer';
// import i18nReducer from './i18n/reducer';


const storage = AsyncStorage;
const reducers = combineReducers({
    global: persistReducer({
        key: 'global',
        storage: storage,
        whitelist: ['registedDeviceToken'],
    }, globalReducer),
});

const sagaMiddleware = createSagaMiddleware();
const middleWares = [thunk, sagaMiddleware];

if (__DEV__) {
    const { logger } = require(`redux-logger`);
    middleWares.push(logger);
}

const composeEnhancers =
    typeof window === 'object' &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && __DEV__) ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
        (middleWares) => middleWares;

const enhancer = composeEnhancers (
  applyMiddleware(...middleWares),
);

const store = createStore(
    reducers,
    enhancer
);



// Saga
// import { newWalletSaga } from './newWallet';
// import { importWalletSaga } from './importWallet';
// import { exchangeSaga } from './exchange';
// import { walletSaga } from './wallet';
// import { withdrawSaga } from './withdraw';

sagaMiddleware.run(function* () {
    // yield all([
    //     newWalletSaga(),
    //     importWalletSaga(),
    //     exchangeSaga(),
    //     walletSaga(),
    //     withdrawSaga(),
    // ]);
});

export const persistor = persistStore(store);

export const dispatch = store.dispatch;
export const getState = store.getState;

export default store;
