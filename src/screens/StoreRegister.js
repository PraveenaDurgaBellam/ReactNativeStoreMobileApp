import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './StoreRegisterStyles';
import handleStoreRegister from '../logic/Register Store';
import handleAddPhoto from '../logic/Register Store';

function StoreRegister() {
  const [store, setStore] = useState({
    store_Name: "",
    store_Manager: "",
    store_Email: "",
    store_Password: "",
    store_Address: "",
    store_City: "",
    store_State: "",
    store_Country: "",
    store_SuiteNo: "",
    store_Zipcode: "",
    store_PhoneNumber: "",
    store_Status: true,
    store_Active: true,
    created_On: "2023-06-19T19:22:13.019Z",
    updated_On: "2023-06-19T19:22:13.019Z",
    store_Image: "",
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImageFrame}></View>
          </View>
          <TouchableOpacity style={styles.addPhotoButton} onPress={handleAddPhoto}>
            <Text style={styles.addPhotoButtonText}>Add Photo</Text>
          </TouchableOpacity>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Store Details</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Store Name"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_Name: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Manager"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_Manager: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Email"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_Email: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Password"
              secureTextEntry
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_Password: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Address"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_Address: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store City"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_City: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store State"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_State: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Country"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_Country: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Suite No"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_SuiteNo: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Zipcode"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_Zipcode: value })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Phone Number"
              placeholderTextColor="#B6B7B7"
              onChangeText={(value) => setStore({ ...store, store_PhoneNumber: value })}
            />
          </View>
          <TouchableOpacity style={styles.registerButton} onPress={handleStoreRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default StoreRegister;
