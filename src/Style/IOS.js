import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B93523'
    },
    buttonPrimary: {
        backgroundColor: '#FFFEFC',
        padding: 20,
        borderRadius: 10,
        marginBottom: 5,
        width: 300
    },
    buttonPrimaryText: {
        color: '#322D31',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: 'bold'
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#B93523',
        paddingLeft:10,
        paddingRight:10,
    },
    headerText: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
        color: '#FFFEFC',
        fontWeight: 'bold'
    }
});
export default styles;