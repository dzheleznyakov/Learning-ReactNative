import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    const { text, onDeleteItem, id} = props;

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#210644'}} onPress={onDeleteItem.bind(this, id)}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 8,
        color: 'white',
    },
});

export default GoalItem;