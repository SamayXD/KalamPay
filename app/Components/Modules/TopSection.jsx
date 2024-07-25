import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopCards from "../Atoms/TopCards";

const TopSection = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "SFProDisplayMedium",
          fontSize: 32,
          marginLeft: "2%",
        }}
      >
        Account
      </Text>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          // overflow: "hidden",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TopCards />
          <TopCards />
          <TopCards />
        </ScrollView>
      </View>
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    height: "80%",
  },
});
