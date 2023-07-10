/* eslint-disable prettier/prettier */
import axios from 'axios';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { baseUrl } from '../apiUtils/api';

 export const handleSignIn = async (email, password, navigation, setLoginStatus) => {
     // Business logic for handling sign-in process
     // ...
     if (email.trim() === '' || password.trim() === '') {
         console.log('Email and password cannot be empty');
         setLoginStatus('empty');
         return;
     }   
     try {
         const url = `StoreAuthorize/storelogin?StoreEmail=${email}&StorePassword=${password}`;
         axios
             .post(baseUrl + url, {
                 headers: {
                     'Content-Type': 'application/json',
                 },
             })
             .then((response) => {
                 console.log('API response:', response.data);
                 // Storing tokens in AsyncStorage
                 AsyncStorage.setItem('refreshToken', response.data.refreshToken);
                 AsyncStorage.setItem('accessToken', response.data.accessToken);
                 console.log('Store id is:', response.data.allStores[0].id);
                AsyncStorage.setItem('Storeid', response.data.allStores[0].id.toString());
                 // ...

                 if (response.data.message === 'Success') {
                     console.log('Login successful');
                     navigation.navigate('Home');
                 } else {
                     console.log('Login failed due to invalid credentials');
                     setLoginStatus('failed');
                 }
             })
             .catch((error) => {
                 console.log('Sign in failed', error);
                 setLoginStatus('failed');
             });
     } catch (error) {
         console.log('Sign in failed:', error);
         setLoginStatus('failed');
     }
 };
