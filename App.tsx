import React from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import SignInPage from './src/screens/SignInPage';


const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyBazaar" component={SignInPage} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;