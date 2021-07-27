import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInput = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoal = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
                    
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInput} 
          value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
            <Button title="Add" onPress={addGoal} />
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: { 
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10, 
    width: '80%',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default GoalInput;