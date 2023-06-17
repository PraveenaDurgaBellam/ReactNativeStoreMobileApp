import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SignInPage from './src/screens/SignInPage';
import StoreRegister from "./src/screens/StoreRegister";


const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInPage" component={SignInPage} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={StoreRegister} options={{ headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;