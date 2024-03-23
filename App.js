import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [allStates, setAllStates] = useState([]);
    const [isGoalInputOpen, setIsGoalInputOpen] = useState(false);

    function handleClickButton(textState) {
        setAllStates((currentState) => [...currentState, {text:textState, id:Math.random().toString()}]);
    }
    
    const handleDelete = (id) => {
        setAllStates((currentState) => {
            return currentState.filter((state) => state.id !== id);
        })
    }

    const handlePressModal = () => {
        setIsGoalInputOpen(true);
    }

    return (
        <View style={styles.container}>
            {isGoalInputOpen && <GoalInput isOpenModal={isGoalInputOpen} setIsOpenModal={setIsGoalInputOpen} onPress={handleClickButton} />}
            {/* <View> */}
                <Button onPress={handlePressModal} color={"purple"} style={styles.modalButton} title='Add New Goal'>
                </Button>
            {/* </View> */}
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
        paddingTop: 80,
        gap: 15,
    },
    bodyContainer: {
        flex: 5,
        borderTopWidth: 1,
        padding: 15,
        width: '100%',
        gap: 10,
    },   

});
