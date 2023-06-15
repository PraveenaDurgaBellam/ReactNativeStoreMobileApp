import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

function SignInPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = () => {
    const baseUrl = 'https://mydesibazaar-qa.azurewebsites.net/api/v1/Store/';
    const url = `getStoreDetails?StoreEmail=${email}&StorePassword=${password}`;
    setIsLoading(true);
    setError('');
   
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNyYXZhbmlAZ21haWwuY29tIiwic3ViIjoic3JhdmFuaUBnbWFpbC5jb20iLCJuYmYiOjE2ODY4NDAyNTgsImV4cCI6MTY4Njg0Mzg1OCwiaWF0IjoxNjg2ODQwMjU4LCJpc3MiOiJteWRlc2liYXphYXIiLCJhdWQiOiJteWRlc2liYXphYXJtb2JpbGUifQ.C6MqO0HuF-gXVe5v6nvB_Y7IR478IoUbl5QSFJJ-YLw'
  
    axios
      .get(`${baseUrl}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log('Login is successful')
        setIsLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        if (error.response) {
          setError('Invalid credentials. Please try again.');
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          setError('Network error. Please check your internet connection and try again.');
          console.log(error.request);
        } else {
          setError('An error occurred. Please try again later.');
          console.log('Error', error.message);
        }
      });

  };
  SignInPage.navigationOptions = {
    headerLeft: null, 
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MYB - Store</Text>
      <Image source={require('../assets/icon1.png')} style={styles.logo} />
      <Text style={styles.tagline}>One Stop Indian Store</Text>
      <TextInput
        style={styles.input}
        placeholder="Registered Email Address/Store Name"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.register}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.appVersion}>Version 1.0 (1)</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#525252',
    marginBottom: 8,
    alignItems: 'center',
    marginTop: 10
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 16,
    color: '#525252',
    marginBottom: 16,
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: 400,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rememberText: {
    marginLeft: 8,
    color: '#525252',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#3D79B2',
    backgroundColor: '#FFFFFF',
  },
  checked: {
    backgroundColor: '#3D79B2',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3D79B2',
    width: 100,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#F8F8F8',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    marginBottom: 8,
  },
  forgotPasswordText: {
    color: '#3D79B2',
  },
  register: {
    marginBottom: 16,
  },
  registerText: {
    color: '#3D79B2',
  },
  appVersion: {
    color: '#282828',
    alignSelf: 'center',

  },
});
export default SignInPage;
