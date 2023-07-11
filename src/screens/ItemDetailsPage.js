import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, Alert, Pressable } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../apiUtils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllItemsScreen from './AllItemsScreen';

function ItemDetailsPage({ route, navigation }) {
  const { item } = route.params;
  const [availableQuantity, setAvailableQuantity] = useState(item.available_Quantity.toString());
  const [modalVisible, setModalVisible] = useState(true);

  const handleQuantityChange = (text) => {
    setAvailableQuantity(text);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  );

  const data = [
    { label: 'Product Name:', value: item.product_Name },
    { label: 'Item UOM:', value: item.item_UOM },
    { label: 'Available Quantity:', value: availableQuantity },
    { label: 'Item ID:', value: item.id },
    { label: 'Is Food:', value: item.isFood ? 'Yes' : 'No' },
    { label: 'Price:', value: item.price },
    { label: 'Price Currency Ticker:', value: item.price_Currency_Ticker },
    { label: 'Store ID:', value: item.store_ID },
    { label: 'Vendor ID:', value: item.vendor_ID },
    { label: 'Created On:', value: item.created_On },
    { label: 'Updated On:', value: item.updated_On },
  ];

  const handleClose = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  const handleUpdateQuantity = async () => {
    try {
      // Make an API call to update the available quantity
      console.log("Item store id is :",item.store_ID)
      console.log("Item id is :",item.id)
      const url = `Item/updateavailablequantity?Store_ID=${item.store_ID}&Item_ID=${item.id}&Available_Quantity=${availableQuantity}`;
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.put(baseUrl + url, null, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // Handle the response as needed
      console.log(response.data);
       Alert.alert('Success', 'Available quantity updated successfully.');
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <Modal visible={modalVisible} animationType="slide" onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Item Details</Text>
          <Pressable onPress={handleClose}>
                <Text style={styles.closeButton}>Close</Text>
              </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.itemImage} />
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Update Quantity:</Text>
          <TextInput
            style={styles.input}
            value={availableQuantity}
            onChangeText={handleQuantityChange}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdateQuantity}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    padding: 8,
    marginTop: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 150,
    height: 110,
    backgroundColor: 'black',
  },
  flatListContainer: {
    marginTop: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  quantityContainer: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  updateButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ItemDetailsPage;
