import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import colors from "./../assets/colors";
import { useFonts } from "expo-font";
const index = () => {
  const [fontsLoaded] = useFonts({
    SFProDisplayRegular: require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    SFProDisplayBold: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    SFProDisplayMedium: require("../assets/fonts/SF-Pro-Display-Medium.otf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/screens/Home");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="#171717" />
      <Text
        style={{
          fontSize: 18,
          fontFamily: "SFProDisplayMedium",
          marginTop: 12,
        }}
      >
        Loading
      </Text>
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
