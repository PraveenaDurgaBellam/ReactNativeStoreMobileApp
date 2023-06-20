import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './StoreRegisterStyles';
import handleStoreRegister from '../logic/Register Store';

function StoreRegister() {
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
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Manager"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Email"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Password"
              secureTextEntry
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Address"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store City"
              placeholderTextColor="#B6B7B7"
           />
            <TextInput
              style={styles.textInput}
              placeholder="Store State"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Country"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Suite No"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Zipcode"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Store Phone Number"
              placeholderTextColor="#B6B7B7"
            />
          <TouchableOpacity style={styles.registerButton} onPress={handleStoreRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
    );
};

export default StoreRegister;
