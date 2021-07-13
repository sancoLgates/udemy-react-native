import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInput = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoal = () => {
    console.log(enteredGoal)
    // setCourseGoals([...courseGoals, enteredGoal])
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ])
  }

  return (
    <View style={styles.screen}>
      <View
        style={styles.inputContainer}
      >
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInput} 
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoal} />
      </View>
      {/* <ScrollView>
        {courseGoals.map((goal => 
          <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: { 
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10, 
    width: '80%' 
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1

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
