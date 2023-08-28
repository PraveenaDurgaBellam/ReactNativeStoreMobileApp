import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './StoreRegisterStyles';

const CameraPage = ({ onScanSuccess }) => {
  const [scanning, setScanning] = useState(false);
  const cameraRef = useRef(null);

  const handleBarcodeScan = async (event) => {
    console.log('Barcode detected:', event.data);
    if (!scanning) {
      setScanning(true);
      onScanSuccess(event.data);
    }
  };

  const startBarcodeScan = () => {
    setScanning(true);
    if (cameraRef.current) {
      cameraRef.current.resumePreview();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startBarcodeScan} disabled={scanning}>
        <Text>{scanning ? 'Scanning...' : 'Scan Barcode'}</Text>
      </TouchableOpacity>
      <RNCamera
        ref={cameraRef}
        style={styles.cameraPreview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onBarCodeRead={handleBarcodeScan}
      />
    </View>
  );
};

export default CameraPage;