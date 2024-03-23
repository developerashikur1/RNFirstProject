import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onPress, isOpenModal, setIsOpenModal }) => {
    const [textState, setTextState] = useState('');

    function handleTextInput(textFromInput) {
        setTextState(textFromInput);
    }
    const handlePress = () => {
        if (textState) onPress(textState);
        setTextState('');
    }
    const handleCancel = () => {
        setIsOpenModal(false);
    }

    return (
        <Modal
            visible={isOpenModal}
        >
            <View style={styles.headerContainer}>
                <TextInput style={styles.textInput} placeholder='Search input' onChangeText={handleTextInput} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="orange" title='Click Me' onPress={handlePress} />
                    </View>
                    <View style={styles.button}>
                        <Button color="red" title='Cancel' onPress={handleCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 0,
        padding: 2.5,
        width: '90%',
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    button:{
        width:'33%',
    },
});