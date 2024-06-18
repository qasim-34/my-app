// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ShoppingScreen from './ShoppingScreen';
import ProfileScreen from './ProfileScreen';
import Item1Screen from './Item1Screen';
import Item2Screen from './Item2Screen';
import Item3Screen from './Item3Screen';
import Item4Screen from './Item4Screen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
  <TopTab.Navigator>
    <TopTab.Screen name="Item1" component={Item1Screen} />
    <TopTab.Screen name="Item2" component={Item2Screen} />
    <TopTab.Screen name="Item3" component={Item3Screen} />
    <TopTab.Screen name="Item4" component={Item4Screen} />
  </TopTab.Navigator>
);

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Detail" component={DetailScreen} />
    <BottomTab.Screen name="Shopping" component={ShoppingScreen} />
    <BottomTab.Screen name="Profile" component={ProfileScreen} />
  </BottomTab.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TopTab" component={TopTabNavigator} />
    <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

