import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage, LandingPage} from '../screens';
const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        name="Landing"
        component={LandingPage}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}
