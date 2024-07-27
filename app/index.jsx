import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import colors from "./../assets/colors";
import { useFonts } from "expo-font";
// import { Image } from "react-native-svg";
const index = () => {
  const [fontsLoaded] = useFonts({
    SFProDisplayRegular: require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    SFProDisplayBold: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    SFProDisplayMedium: require("../assets/fonts/SF-Pro-Display-Medium.otf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/Onboard"); //DEV PURPOSES
      // router.navigate("/Onboard"); //PRODF
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container]}>
      <Image
        style={{
          resizeMode: "contain",
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
        source={require("../assets/images/kalamLogo.png")}
      />
      <Text
        style={{
          fontSize: 24,
          fontFamily: "SFProDisplayBold",
          marginTop: 12,
        }}
      >
        KalamPay.
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "SFProDisplayMedium",
          // marginTop: 12,
        }}
      >
        Loading
      </Text>
      <View
        style={{
          bottom: "10%",
          position: "absolute",
          // s
        }}
      >
        <ActivityIndicator size="large" color="#171717" />
      </View>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    // padding: 10,
  },
});
