import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
 } from 'react-native';

 import GoalItem from './components/GoalItem';
 import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(existingGoals => [
      ...existingGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
  }

  function deleteGoalHandler() {
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={itemData => {
            const {item} = itemData;
            const goal = item.text;
            return (
              <GoalItem 
                text={goal} 
                onDeleteItem={deleteGoalHandler} 
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  padding: 50,
  paddingHorizontal: 16,
 },
 goalsContainer: {
  flex: 5,
 },
});
