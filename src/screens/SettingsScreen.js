/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { MaterialIcons } from 'react-native-vector-icons';


const SettingsScreen = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [storeDetails, setStoreDetails] = useState(null);

    useEffect(() => {
        const fetchStoreDetails = async () => {
            try {
                const storedDetailsString = await AsyncStorage.getItem('storeDetails');
                const storedDetails = JSON.parse(storedDetailsString);
                setStoreDetails(storedDetails);
            } catch (error) {
                console.log('Error retrieving store details:', error);
            }
        };

        fetchStoreDetails();
    }, []);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleDetails} style={styles.sectionBar}>
                <Text style={styles.sectionBarText}>Display Store Details</Text>
                <View style={styles.arrowImageContainer}>
                    <Image
                        source={require('../assets/arrow.png')}
                        style={styles.arrowImage}
                    />
                </View>
            </TouchableOpacity>

            {showDetails && storeDetails && (
                <View>
                    <View>
                        <Text style={styles.sectionHeading}>Store Information</Text>
                        <Text style={styles.storeDetailText}>Store Name: {storeDetails[0].store_Name}</Text>
                        <Text style={styles.storeDetailText}>Store Email: {storeDetails[0].store_Email}</Text>
                        <Text style={styles.storeDetailText}>Store Manager: {storeDetails[0].store_Manager}</Text>
                    </View>

                    <View>
                        <Text style={styles.sectionHeading}>Store Address</Text>
                        <Text style={styles.storeDetailText}>Store Address: {storeDetails[0].store_Address}</Text>
                        <Text style={styles.storeDetailText}>Store Suite No: {storeDetails[0].store_SuiteNo}</Text>
                        <Text style={styles.storeDetailText}>Store City: {storeDetails[0].store_City}</Text>
                        <Text style={styles.storeDetailText}>Store State: {storeDetails[0].store_State}</Text>
                        <Text style={styles.storeDetailText}>Store Country: {storeDetails[0].store_Country}</Text>
                        <Text style={styles.storeDetailText}>Store Zipcode: {storeDetails[0].store_Zipcode}</Text>
                    </View>

                    <View>
                        <Text style={styles.sectionHeading}>Contact Information</Text>
                        <Text style={styles.storeDetailText}>Store Phone Number: {storeDetails[0].store_PhoneNumber}</Text>
                        <Text style={styles.storeDetailText}>Store Status: {storeDetails[0].store_Status ? 'Open' : 'Closed'}</Text>
                        <Text style={styles.storeDetailText}>Store Active: {storeDetails[0].store_Active ? 'Yes' : 'No'}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    sectionHeading: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 8,
    },
    sectionBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
    sectionBarText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    dropdownIconContainer: {
        backgroundColor:'white',
        borderRadius: 12,
        padding: 4,
    },
    dropdownIcon: {
        alignSelf: 'center',
    },
    storeDetailText: {
        fontSize: 20, // Increase the font size as desired
        marginBottom: 4,
    },
    /**arrowImageContainer: {
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
        padding: 4,
    },
    arrowImage: {
        width: 24,
        height: 24,
    },*/
    arrowImageContainer: {
        padding: 4,
    },
    arrowImage: {
        width: 24,
        height: 24,
    },
});

export default SettingsScreen;
