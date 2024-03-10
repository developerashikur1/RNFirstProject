import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [allStates, setAllStates] = useState([]);

    function handleClickButton(textState) {
        setAllStates((currentState) => [...currentState, {text:textState, id:Math.random().toString()}]);
    }
    const handleDelete = (id) => {
        setAllStates((currentState) => {
            return currentState.filter((state) => state.id !== id);
        })
    }

    return (
        <View style={styles.container}>
            <GoalInput onPress={handleClickButton} />
            <View style={styles.bodyContainer}>
                <FlatList alwaysBounceVertical={false} data={allStates} renderItem={(state) => {
                    return (
                       <GoalItem onDeletePress={handleDelete} id={state.item.id} text={state.item.text} index={state.index} />
                    )
                }} keyExtractor={(item, index) => item.id} />

                {/* <StatusBar style="auto" /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyContainer: {
        flex: 5,
        borderTopWidth: 1,
        padding: 15,
        width: '100%',
        gap: 10,
    },   
});
