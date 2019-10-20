import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import _ from 'lodash';

import english from './translations/english';
import japanese from './translations/japanese';


export const fallbackLanguage = (locale) => {
    if (_.startsWith(locale, 'en')) {
        return 'en';
    } else if (_.startsWith(locale, 'ja')) {
        return 'ja';
    } else if (_.startsWith(locale, 'zh')) {
        return 'zh';
    } else {
        return 'ja';
    }
};

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('en'),
    init: () => {},
    cacheUserLanguage: () => {},
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        initImmediate: false,
        resources: {
            en: english,
            ja: japanese,
        },
    });


export default i18next;
