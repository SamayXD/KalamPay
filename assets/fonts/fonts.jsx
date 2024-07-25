import { useFonts } from "expo-font";
import React from "react";

const fonts = ({ children }) => {
  const [fontsLoaded] = useFonts({
    SFProDisplayRegular: require("../fonts/SF-Pro-Display-Regular.otf"),
    SFProDisplayBold: require("../fonts/SF-Pro-Display-Bold.otf"),
    SFProDisplayMedium: require("../fonts/SF-Pro-Display-Medium.otf"),
  });
  return children;
};

export default fonts;
