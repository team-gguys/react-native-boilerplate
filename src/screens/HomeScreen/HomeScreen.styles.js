import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: '23rem',
        lineHeight: '26rem',
        fontWeight: 'bold',
        color: 'black',
    },

    button: {
        marginTop: '20rem',
        backgroundColor: 'green',
        paddingHorizontal: '40rem',
        paddingVertical: '10rem',
        borderRadius: '5rem',
    },
});
