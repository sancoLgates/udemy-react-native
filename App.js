import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  const addGoal = goalInput => {
    // setCourseGoals([...courseGoals, goalInput])
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalInput }
    ])
    setIsAddMode(false)
  }

  const removeGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId )
    })
  }

  const cancelGoal = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoal} onCancel={cancelGoal} />
      {/* <ScrollView>
        {courseGoals.map((goal => 
          <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* FlatList better performance than ScrollView */}
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => ( 
          <GoalItem 
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoal}
            // onDelete={() => console.log(itemData.item.id, itemData.item.value)}
          />

          // <View style={styles.listItem}>
          //   <Text>{itemData.item.value}</Text>
          // </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})





// rn-first-app

// export default function App() {
//   const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
//   return (
//     <View style={styles.container}>
//       <Text style={{color: '#6080ff', fontSize: 28}} Text>{outputText}</Text>
//       <StatusBar style="auto" />
//       <Button title="Change Text" onPress={() => setOutputText('change text')}></Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
