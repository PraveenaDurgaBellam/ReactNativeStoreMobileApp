import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './StoreRegisterStyles';
import { handleStoreRegister } from '../logic/RegisterStore';


function StoreRegister({navigation}) {
        const [StoreName, setStoreName] = useState('');
        const [StoreManager, setStoreManager] = useState('');
        const [StoreEmail, setStoreEmail] = useState('');
        const [StorePassword, setStorePassword] = useState('');
        const [StoreAddress, setStoreAddress] = useState('');
        const [StoreCity, setStoreCity] = useState('');
        const [StoreState, setStoreState] = useState('');
        const [StoreCountry, setStoreCountry] = useState('');
        const [StoreSuiteNo, setStoreSuiteNO] = useState('');
        const [StoreZipcode, setStoreZipcode] = useState('');
        const [StorePhoneNumber,setStorePhoneNumber] = useState('');
        const [StoreStatus, setStoreStatus] = useState('');
        const [StoreActive, setStoreActive] = useState('');
        const handleRegister = () => {
            handleStoreRegister(StoreName,StoreManager,StoreEmail, StorePassword,StoreAddress, StoreSuiteNo, StoreCity, StoreState, StoreCountry,StoreZipcode,StorePhoneNumber,StoreStatus,StoreActive,navigation);
        };
  return (
    <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.profileImageContainer}>
                    <View style={styles.profileImageFrame}>
                    </View>
                </View>
                <TouchableOpacity style={styles.addPhotoButton}>
                    <Text style={styles.addPhotoButtonText}>Add Photo</Text>
                </TouchableOpacity>
            </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Store Details</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Store Name"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreName(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Manager"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreManager(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Email"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreEmail(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Password"
              secureTextEntry
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStorePassword(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Address"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreAddress(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store City"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreCity(text)}
           />
            <TextInput
              style={styles.textInput}
              placeholder="Store State"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreState(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Country"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreCountry(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Suite No"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreSuiteNO(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Zipcode"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreZipcode(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Phone Number"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStorePhoneNumber(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Status"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreStatus(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Active"
              placeholderTextColor="#B6B7B7"
              onChangeText={text => setStoreActive(text)}
            />
            
            
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
    );
};

export default StoreRegister;
