import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button,
 } from 'react-native';

 import GoalItem from './components/GoalItem';
 import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(existingGoals => [
      ...existingGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title="Add new goal" 
        color="#5e0acc" 
        onPress={startAddGoalHandler} 
      />
      <GoalInput 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}
        visible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={itemData => {
            const {item} = itemData;
            const goal = item.text;
            return (
              <GoalItem 
                id={item.id}
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
