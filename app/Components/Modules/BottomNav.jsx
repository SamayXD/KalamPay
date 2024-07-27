import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
const BottomNav = ({ isNav }) => {
  const homeImage = require("../../../assets/images/homeIcon.png");
  const qrIcon = require("../../../assets/images/qrIcon.png");
  const cardIcon = require("../../../assets/images/cardIcon.png");

  const getOpacity = (navItem) => (isNav === navItem ? 1 : 0.5);

  return (
    <View style={[styles.container, { position: "absolute", bottom: "5%" }]}>
      <View style={styles.mainNav}>
        <Pressable
          onPress={() => {
            router.navigate("/screens/Home");
          }}
        >
          <Image
            source={homeImage}
            style={[styles.images, { opacity: getOpacity("home") }]}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            router.navigate("/screens/QRScannerScreen");
          }}
        >
          <Image
            source={qrIcon}
            style={[styles.images2, { opacity: getOpacity("qr") }]}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            router.navigate("/screens/MyCards");
          }}
        >
          <Image
            source={cardIcon}
            style={[styles.images2, { opacity: getOpacity("card") }]}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    // bottom: "5%",
    height: "8%",
    width: "100%",
    // backgroundColor: "blue",
    // justifyContent: "center",
    alignItems: "center",
  },
  mainNav: {
    width: "40%",
    backgroundColor: "white",
    elevation: 30,
    height: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#FAF9F6",
  },
  images: {
    resizeMode: "contain",
    width: 25,
    height: "80%",
  },
  images2: {
    resizeMode: "contain",
    width: 25,
    height: "80%",
    opacity: 0.4,
  },
});
