/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './StoreRegisterStyles';
import handleCreateItem from '../logic/CreateItem';

function AddItemPage({ navigation }) {
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
            <Text style={styles.sectionTitle}>Item Details</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Product Name"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Available Quantity"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Item UOM"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Vendor Id"
              secureTextEntry
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="isFood"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Price"
              placeholderTextColor="#B6B7B7"
           />
            <TextInput
              style={styles.textInput}
              placeholder="Price Currency Ticker"
              placeholderTextColor="#B6B7B7"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Shelf Capacity"
              placeholderTextColor="#B6B7B7"
            />    
            <TextInput
              style={styles.textInput}
              placeholder="Item Barcode"
              placeholderTextColor="#B6B7B7"
            />          
          <TouchableOpacity style={styles.registerButton} onPress={handleCreateItem}>
            <Text style={styles.registerButtonText}>Create Item</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
    );
};
export default AddItemPage; 