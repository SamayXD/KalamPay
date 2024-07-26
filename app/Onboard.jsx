import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboard = () => {
  const img1 = require("../assets/images/onboardimage.jpeg");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KalamPay.</Text>
      <Image source={img1} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textRegular}>Your</Text>
        <Text style={styles.textBold}>Financial</Text>
        <Text style={styles.textRegular}>Navigator</Text>
        <Text style={styles.description}>
          Invest in projects that make a difference. Join us in supporting
          impactful initiatives and create a positive change in the world.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => router.navigate("/screens/Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started with KalamPay</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: "35%",
  },
  title: {
    fontFamily: "SFProDisplayMedium",
    fontSize: 28,
    position: "absolute",
    zIndex: 1,
    top: "5%",
    left: "7%",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  textContainer: {
    position: "absolute",
    top: "65%",
    left: "7%",
    width: "80%",
    fontFamily: "SFProDisplayMedium",
  },
  textRegular: {
    fontFamily: "SFProDisplayRegular",
    fontSize: 60,
    lineHeight: 62,
  },
  textBold: {
    fontFamily: "SFProDisplayBold",
    fontSize: 60,
    lineHeight: 62,
  },
  description: {
    width: "100%",
    marginTop: 15,
    fontFamily: "SFProDisplayMedium",
    fontSize: 15,
    color: "gray",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.black,
    width: "90%",
    padding: 16,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "SFProDisplayMedium",
    fontSize: 16,
  },
});
