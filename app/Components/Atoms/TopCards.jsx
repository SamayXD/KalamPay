import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../../assets/colors";

const TopCards = () => {
  return (
    <View style={styles.container}>
      <Text>TopCards</Text>
    </View>
  );
};

export default TopCards;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: 270,
    marginRight: 13,
    marginTop: 10,
    borderRadius: 30,
    padding: "5%",
    backgroundColor: colors.accentBlue,
    borderWidth: 1,
    borderColor: "#6ed9ff",
  },
});
