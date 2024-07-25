import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const BottomNav = () => {
  const homeImage = require("../../../assets/images/homeIcon.png");
  const qrIcon = require("../../../assets/images/qrIcon.png");
  const cardIcon = require("../../../assets/images/cardIcon.png");
  return (
    <View style={styles.container}>
      <View style={styles.mainNav}>
        <Image source={homeImage} style={styles.images} />
        <Image source={qrIcon} style={styles.images2} />
        <Image source={cardIcon} style={styles.images2} />
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "5%",
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
