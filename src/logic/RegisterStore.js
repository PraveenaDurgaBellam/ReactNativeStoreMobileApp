import { Alert } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../apiUtils/api';



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
        !StoreActive 
        
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
        store_Status: Boolean(StoreStatus),
        store_Active: Boolean(StoreActive),
        created_On: new Date(),
        updated_On: new Date(),
        store_Image: null,
      };
      const newStoreRegs = [requestModel];
      const postData = {
        newStoreRegs,
      };
      const postDataString = JSON.stringify(postData);
      console.log(postDataString);
      
        const url = 'Store/createnewstore';
        const response = await axios.post(baseUrl + url, postDataString,{
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);

        if (response && response.data.message === 'Success')  {
          Alert.alert('Success', 'Store registered successfully');
          console.log(response.data);
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'Store registration failed');
          console.log(error);
        }
      } catch (error) {
        Alert.alert('Error', 'Exception during store registration');
        console.log('hello' ,error);
      }    
  };