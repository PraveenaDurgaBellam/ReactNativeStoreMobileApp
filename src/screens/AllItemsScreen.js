/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import styles from './AllItemsScreenStyles';
import { baseUrl } from '../apiUtils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AllItemsScreen({ navigation }) {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      console.log(token);
      const storeID = await AsyncStorage.getItem('Storeid');
      console.log(storeID);
      const url = `Item/getallitems?storeID=${storeID}`;
      const response = await axios.get(baseUrl + url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const fetchedItems = response.data.allItems;
      console.log(fetchedItems);
      setItemData(fetchedItems);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleItemPress = (item) => {
    console.log('Pressed item:', item);
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View key={item.id} style={styles.collectionItem}>
        <View style={styles.collectionItemContent}>
          <View style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>Product Name: {item.product_Name}</Text>
            <Text style={styles.itemDescription}>Item UOM: {item.item_UOM}</Text>
            <Text style={styles.itemQuantity}>Available Quantity: {item.available_Quantity}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleAddItem = () => {
    navigation.navigate('AddItem'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={handleAddItem}>
          <Text style={styles.AddItemButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {itemData && itemData.length > 0 ? (
          <FlatList
            data={itemData}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.emptyListLabel}>No items found.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default AllItemsScreen;
