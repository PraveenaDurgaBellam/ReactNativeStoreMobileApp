import { Alert } from 'react-native';
import { baseUrl } from "../apiUtils/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {Home} from '../screens/HomeScreen';


export const handleStoreRegister = async (StoreName,StoreManager,StoreEmail, StorePassword,StoreAddress, StoreSuiteNo, StoreCity, StoreState, StoreCountry,StoreZipcode,StorePhoneNumber,StoreStatus,StoreActive,navigation) => {

    try {
      if (
        !StoreName ||
        !StoreManager ||
        !StoreEmail||
        !StorePassword||
        !StoreAddress||
        !StoreSuiteNo||
        !StoreCity||
        !StoreState||
        !StoreCountry||
        !StoreZipcode||
        !StorePhoneNumber ||
        !StoreStatus||
        !StoreActive ||
        !StoreZipcode
      ) {
        Alert.alert('Error', 'One or more required fields are empty');
        return;
      }

      const requestModel = {
        store_Name: StoreName,
        store_Manager: StoreManager,
        store_Email: StoreEmail,
        store_Password: StorePassword,
        store_Address: StoreAddress,
        store_City: StoreCity,
        store_State: StoreState,
        store_Country: StoreCountry,
        store_SuiteNo: StoreSuiteNo,
        store_Zipcode: StoreZipcode,
        store_PhoneNumber: StorePhoneNumber,
        store_Status: StoreStatus,
        store_Active: StoreActive,
        created_On: new Date(),
        updated_On: new Date(),
        store_Image: 'null',
      };
      const newStoreRegs = [requestModel];
      const postData = {
        newStoreRegs,
      };
      const postDataString = JSON.stringify(postData);
      console.log(postDataString);
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log("Access token is :", accessToken);
        const url = 'Store/createnewstore';
        const response = await axios.post(baseUrl + url, postDataString,{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);

        if (response && response.data.message === 'Success') {
          Alert.alert('Success', 'Store registered successfully');
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'Store registration failed');
          console.log(error);
        }
      } catch (error) {
        Alert.alert('Error', 'Exception during store registration');
        console.log(error);
      }    
  };