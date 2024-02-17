import { TextInput, View, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4, // shadow for Android
        shadowColor: 'black', // shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // shadow color for iOS
        shadowRadius: 6, // shadow radius for iOS
        shadowOpacity: 0.25, // shadow opacity for iOS
    },
});
