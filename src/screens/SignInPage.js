import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import 'react-native-gesture-handler';

function SignInPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = () => {
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);

    // Simulating API call delay
    // Make API call here to authenticate the user
    const handleLogin = () => {
      const baseUrl = 'https://localhost:5001/api/v1/';
      const url = `Store/getStoreDetails?StoreEmail=${email}&StorePassword=${password}`;

      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((responseJson) => {
          // Handle the API response here
          console.log('API response:', responseJson);

          // Check if the login was successful
          if (responseJson.success) {
            // Perform actions for successful login
            console.log('Login successful');
          } else {
            // Perform actions for failed login
            console.log('Login failed');
          }
        })
        .catch((error) => {
          // Error occurred during the API request
          console.log('Error:', error);
        });
    };

    setTimeout(() => {
      // Mock API response
      const response = { success: true };
      setIsLoading(false);

      if (response.success) {
        // Redirect to the details screen
        navigation.navigate('Home');
      } else {
        setError('Invalid email or password.');
      }
    }, 2000);
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

      <TouchableOpacity
        style={styles.rememberContainer}
        onPress={() => setRememberMe(!rememberMe)}
      >
        <Text style={styles.rememberText}>Remember Me</Text>
        <View style={[styles.checkbox, rememberMe && styles.checked]} />
      </TouchableOpacity>

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
};

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