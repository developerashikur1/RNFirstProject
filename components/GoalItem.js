import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ onDeletePress, id, text, index }) => {


    return (
        <View style={[index % 2 === 0 ? styles.individualStyle : styles.individualStyle1, styles.commonStyle]}>
            <Pressable 
            android_ripple={{ color: '#skyblue' }} 
            onPress={() => onDeletePress(id)}
            style={({pressed}) => pressed && styles.pressedStyle}
            >
                <Text style={styles.viewText}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    commonStyle: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: 400,
        borderRadius: 6,
        marginVertical: 8,
    },
    individualStyle: {
        backgroundColor: 'orange',
    },
    individualStyle1: {
        backgroundColor: '#cccccc',
    },
    viewText: {
        color: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    // for ios style //? because android_ripple will not work for ios. so that we have to do it customized by style props
    pressedStyle: {
        color: '#green',
    },  
});