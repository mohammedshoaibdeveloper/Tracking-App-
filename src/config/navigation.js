import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import login from '../screens/login';
import signup from '../screens/signup';
import home from '../screens/home';
import map from '../screens/map';








const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="signup" options={{ headerShown: false }} component={signup} />
      <Stack.Screen name="map" options={{ headerShown: false }} component={map} />
      <Stack.Screen name="home" options={{ headerShown: false }} component={home} />
      <Stack.Screen name="login" options={{ headerShown: false }} component={login} />
    
    
      





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
