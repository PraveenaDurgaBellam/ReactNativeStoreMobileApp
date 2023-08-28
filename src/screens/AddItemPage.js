/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from './StoreRegisterStyles';
import handleCreateItem from '../logic/CreateItem';
import CameraPage from './CameraPage';

function AddItemPage({ navigation }) {
  const [barcodeData, setBarcodeData] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleScanSuccess = (data) => {
    setBarcodeData(data);
    setShowCamera(false);
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
                <TouchableOpacity
            style={styles.addPhotoButton}
            onPress={() => setShowCamera(true)}
          >
            <Text style={styles.addPhotoButtonText}>Scan Barcode</Text>
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
              value={barcodeData || ''}
              placeholderTextColor="#B6B7B7"
            />             
          <TouchableOpacity style={styles.registerButton} onPress={handleCreateItem}>
            <Text style={styles.registerButtonText}>Create Item</Text>
          </TouchableOpacity>
          
          </View>
          </ScrollView>
          <Modal
        visible={showCamera}
        animationType="slide"
        onRequestClose={() => setShowCamera(false)}
      >
        <CameraPage onScanSuccess={handleScanSuccess} />
      </Modal>
        </View>
    );
};
export default AddItemPage; 