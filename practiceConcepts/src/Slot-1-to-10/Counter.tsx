import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-paper';

export default function Counter() {

  const [counter, setCounter] = useState(0);
  const [isSwitchOn, setIsSwitchOn]=useState(false);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }
  const resetCounter = () => {
    setCounter(0);
  }
  const decrementCounter = () => {
    if (counter <= 0) {
      return Alert.alert('Counter value cannot be less than 0');
    }
    setCounter(counter - 1);
  };

  const onToggleSwitch = ()=>{
    setIsSwitchOn(!isSwitchOn);
  }

  return (
    <View style={styles.container}>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
      <Text>Is Switch enabled = {isSwitchOn}</Text>
      <Text>Counter value : {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Increment' onPress={incrementCounter} />
        <Button title='Decrement' onPress={decrementCounter} />
        <Button title='Reset' onPress={resetCounter} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    gap: 20,
    flexDirection: 'row',
  },
  button: {
    padding: 20
  }
})

/*
1. Create a counter component with increment, decrement, and reset functionality
2. Build a toggle switch component that manages its own state
*/