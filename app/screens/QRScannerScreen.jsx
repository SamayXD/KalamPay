import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Modal from "react-native-modal";
import colors from "../../assets/colors"; // Assuming colors are defined in this file
import BottomNav from "../Components/Modules/BottomNav";

export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [qrData, setQrData] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setQrData(data);
    setModalVisible(true);
  };

  if (hasPermission === null) {
    return (
      <Text style={styles.permissionText}>
        Requesting for camera permission
      </Text>
    );
  }
  if (hasPermission === false) {
    return <Text style={styles.permissionText}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KalamPay.</Text>
      <Text style={styles.subtitle}>💸 Pay anyone using KalamPay.</Text>
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {scanned && !modalVisible && (
        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.scanAgainButtonText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>QR Code Data</Text>
          <Text style={styles.modalText}>{qrData}</Text>
          <TouchableOpacity
            style={styles.scanAgainButton}
            onPress={() => {
              setModalVisible(false);
              setScanned(false);
            }}
          >
            <Text style={styles.scanAgainButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <BottomNav isNav="qr" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FA",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 0,
    fontFamily: "SFProDisplayBold",
  },
  subtitle: {
    fontSize: 24,
    color: "#333",
    marginBottom: 20,
    fontFamily: "SFProDisplayRegular",
  },
  scannerContainer: {
    width: "90%",
    height: "50%",
    // aspectRatio: 0.9,
    overflow: "hidden",
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FAF9F6",
    shadowColor: "#F9F6EE",
    elevation: 1,
  },
  permissionText: {
    fontSize: 16,
    color: "#333",
    fontFamily: "SFProDisplayMedium",
  },
  scanAgainButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  scanAgainButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "SFProDisplayMedium",
  },

  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
