import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [textState, setTextState] = useState('');
    const [allStates, setAllStates] = useState([]);

    function handleTextInput (textFromInput) {
        setTextState(textFromInput);
    }

    function handleClickButton () {
        setAllStates((currentState) => [...currentState, textState]);
    }
    
    console.log(allStates)
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TextInput style={styles.textInput} placeholder='Search input' onChangeText={handleTextInput} />
                <Button title='Click Me' onPress={handleClickButton} />
            </View>
            <View style={styles.bodyContainer}>
                {
                    allStates.map((state, index) => <Text style={[index % 2 === 0 ? styles.individualStyle : styles.individualStyle1, styles.commonStyle]} key={state}>{state}</Text>)
                }
                {/* <StatusBar style="auto" /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // minHeight: '100vh',
        color: '#fff',
        // backgroundColor:"green",
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        // borderColor: 'red',
    },
    bodyContainer: {
        flex: 5,
        borderTopWidth: 1,
        padding: 15,
        width: '100%',
        gap: 10,
    },    
    commonStyle:{
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: 400,
    },
    individualStyle:{
        backgroundColor: 'orange',
    },
    individualStyle1:{
        backgroundColor: '#cccccc',
    },
});
