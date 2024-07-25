import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors";
import { router } from "expo-router";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
const Onboard = (navigation) => {
  const img1 = require("../assets/images/onboardimage.jpeg");
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "SFProDisplayMedium",
          fontSize: 28,
          position: "absolute",
          zIndex: 1,
          top: "5%",
          left: "7%",
        }}
      >
        KalamPay.
      </Text>
      <Image
        source={img1}
        style={{
          width: "100%",
          height: " 80%",
          resizeMode: "contain",
        }}
      />
      <View
        style={{
          position: "absolute",
          top: "65%",
          left: "7%",
          width: "80%",
        }}
      >
        <Text
          style={{
            fontFamily: "SFProDisplayRegular",
            fontSize: 60,
            lineHeight: 62,
          }}
        >
          Your
        </Text>
        <Text
          style={{
            fontFamily: "SFProDisplayBold",
            fontSize: 60,
            lineHeight: 62,
          }}
        >
          Financial
        </Text>
        <Text
          style={{
            fontFamily: "SFProDisplayRegular",
            fontSize: 60,
            lineHeight: 62,
          }}
        >
          Navigator
        </Text>

        <Text
          style={{
            width: "100%",
            marginTop: 15,
            fontFamily: "SFProDisplayMedium",
            fontSize: 15,
            color: "gray",
          }}
        >
          Invest in projects that make a difference. Join us in supporting
          impactful initiatives and create a positive change in the world.
        </Text>
      </View>
      <View
        style={{
          position: "absolute",

          width: "100%",
          bottom: "5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            router.navigate("/screens/Home");
          }}
          style={{
            backgroundColor: colors.black,
            width: "90%",
            padding: 16,
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontFamily: "SFProDisplayMedium",
              fontSize: 16,
            }}
          >
            Get Started with KalamPay
          </Text>
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
});
