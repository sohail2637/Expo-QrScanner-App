import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Header from './header'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [openScanner, setOpenScanner] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(`this is data...${type}......${data}`)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 15,
      }}
    >
      <Header/>
      {/* <View
        style={{
          width: "100%",
          height: 500,
          backgroundColor: "red",
        }}
      > */}
      {openScanner && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}

      {!openScanner && (
        <View>
          <View
            style={{
              width: "100%",
              height: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ paddingBottom: 20, fontSize: 18, fontWeight: "600" }}
            >
              Barcode Scaner
            </Text>
            <Text>
              Put a personal shopper in your pocket with ScanLife so you’ll
              always get the information you want most. Scan any product
              barcode, QR Code or Microsoft Tag and we’ll quickly find you more
              about it including prices, reviews and now even deliver you a list
              of local stores for purchasing!
            </Text>
          </View>
          <Button title={"Tap to Scaning"} onPress={() => setOpenScanner(true)} />
        </View>
      )}

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
