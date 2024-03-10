import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({onPress}) => {
    const [textState, setTextState] = useState('');

    function handleTextInput(textFromInput) {
        setTextState(textFromInput);
    }
    const handlePress = () => {
        if(textState) onPress(textState);
        setTextState('');
    }
    
    return (
        <View style={styles.headerContainer}>
            <TextInput style={styles.textInput} placeholder='Search input' onChangeText={handleTextInput} />
            <Button color="orange" title='Click Me' onPress={handlePress} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 0,
        padding: 2.5,
        width: '70%',
        marginRight: 8,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});