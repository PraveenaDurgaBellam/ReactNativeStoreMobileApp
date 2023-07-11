/* eslint-disable prettier/prettier */
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SignInPage from './src/screens/SignInPage';
import StoreRegister from "./src/screens/StoreRegister";
import AllItemsScreen from "./src/screens/AllItemsScreen";
import ItemVendorsScreen from "./src/screens/ItemVendors";
import TodaysMenuScreen from "./src/screens/TodaysMenuScreen";
import OrdersScreen from "./src/screens/OrdersScrenn";
import SettingsScreen from "./src/screens/SettingsScreen";
import AddItemPage from "./src/screens/AddItemPage";
import ItemDetailsPage from "./src/screens/ItemDetailsPage";

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInPage" component={SignInPage} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={StoreRegister} options={{ headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AllItems" component={AllItemsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Vendors" component={ItemVendorsScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Menu" component={TodaysMenuScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: true }} />
        <Stack.Screen name="AddItem" component={AddItemPage} options={{ headerShown: true }}/>
        <Stack.Screen name="ItemDetails" component={ItemDetailsPage} options={{ headerShown: true }}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{
          headerStyle: {
            backgroundColor: '#0080FF', // Set your desired color here
          }, headerShown: true}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;