import { PixelRatio, Dimensions, Platform } from 'react-native';


const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('window').width;


const normalize = (size) => {
    // ios
    if (Platform.OS === 'ios') {
        if (2 <= pixelRatio && pixelRatio < 3) {
            // Iphone 5
            if (deviceWidth < 360) {
                return size * 0.8;
            }
        }

        return size;
    }


    // android
    if (pixelRatio < 2) {
        if (deviceWidth < 360) {
            return size * 0.7;
        }
    } else if (2 <= pixelRatio && pixelRatio < 3) {
        if (deviceHeight < 670) {
            return size * 0.8;
        }
    }

    return size;
};


export default normalize;
