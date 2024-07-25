import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Greet = () => {
  const profic = require("../../../assets/images/profilepic.jpeg");
  const notif = require("../../../assets/images/notifIcon.png");
  return (
    <View style={styles.container}>
      <Image source={profic} style={styles.prof} />
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "SFProDisplayMedium",
            lineHeight: 22,
          }}
        >
          Welcome Back,
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "SFProDisplayBold",
            lineHeight: 22,
          }}
        >
          Samay Navale
        </Text>
      </View>
      <Image source={notif} style={styles.alrt} />
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FFFFFF",
    flexDirection: "row",
    height: "8%",
    // padding: 3,
    paddingRight: "5%",
  },
  prof: {
    width: "15%",
    height: "90%",
    resizeMode: "contain",
    borderRadius: 100,
  },
  alrt: {
    width: "15%",
    height: "40%",
    resizeMode: "contain",
    borderRadius: 100,
    position: "absolute",
    right: 4,
    top: 15,
  },
});
