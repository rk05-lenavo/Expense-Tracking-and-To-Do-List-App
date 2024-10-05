import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoList from './src/components/ToDoList';
import ExpensePage from './src/components/ExpensePage';
import ScreenWrapper from './src/components/ScreenWrapper'; // Ensure this is imported

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen 
          name="ToDoList" 
          // Use children to wrap the component with ScreenWrapper
        >
          {() => (
            <ScreenWrapper>
              <ToDoList />
            </ScreenWrapper>
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="ExpensePage" 
          // Use children to wrap the component with ScreenWrapper
        >
          {() => (
            <ScreenWrapper>
              <ExpensePage />
            </ScreenWrapper>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
