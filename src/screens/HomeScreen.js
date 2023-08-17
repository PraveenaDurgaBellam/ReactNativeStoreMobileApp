/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const itemsData = [
    { id: 'AllItems', name: 'All Items', image: require('../assets/inventory.png') },
    { id: 'Vendors', name: 'Item Vendors', image: require('../assets/vendor.png') },
    { id: 'Menu', name: 'Todays Menu', image: require('../assets/todays_menu.png') },
    { id: 'Orders', name: 'Orders', image: require('../assets/orders.png') },
    { id: 'Settings', name: 'Settings', image: require('../assets/settings.png') },
    { id: 'Restock', name: 'Restock', image: require('../assets/restock.png') },
    // Add more items as needed
];
const windowWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
                <Image style={styles.itemImage} source={item.image} />
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
    const handleItemPress = (item) => {
        navigation.navigate(item.id);
    };
    const handleLogout=()=>{
        navigation.replace('SignInPage');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.toolbar}>                
                    <Text style={styles.homeButton}>Home</Text>                
            <TouchableOpacity onPress={() => handleLogout()}>                
                <Text style={styles.logoutButton}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/placeholder_image.png')} />
                <View style={styles.overlay}>
                    <Text style={styles.storeNameText}>Welcome to Demo Store</Text>
                </View>
            </View>
            <FlatList
                data={itemsData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.itemList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0080FF',
        padding: 16,
        width: '100%',
    },
    logoutButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    homeButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    imageContainer: {
        height: 0.2 * Dimensions.get('window').height,
        marginBottom: 16,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: 'gray',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storeNameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
    },
    itemList: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        margin: 8,
        width: (windowWidth - 48) / 2, // Adjust the width as needed
        height: (windowWidth - 140) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImage: {
        width: '80%',
        height: '80%',
        aspectRatio: 1, // Maintain aspect ratio of the image
        resizeMode: 'contain',
    },
    itemName: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
    },
});

export default HomeScreen;
