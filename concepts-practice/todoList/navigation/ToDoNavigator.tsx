import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ToDoList from '../screens/ToDoList';

const Stack = createNativeStackNavigator();

export default function ToDoNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='TodoList' component={ToDoList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}