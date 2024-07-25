import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../../assets/colors";

const TransactionItem = (props) => {
  const creditImage = require("../../../assets/images/leftDownA.png");
  const debitImage = require("../../../assets/images/rightTopA.png");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={props.Credit ? creditImage : debitImage}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.Title}</Text>
        <Text style={styles.time}>11:11 AM</Text>
      </View>
      <Text style={styles.amountStyle}>
        <Text style={{ color: props.Credit ? "green" : "red" }}>
          {props.Credit ? "+" : "-"}
        </Text>{" "}
        ₹{props.Amount}
      </Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "14%",
    marginVertical: 10,
  },
  imageContainer: {
    width: "15%",
    borderRadius: 39,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "contain",
    width: "60%",
    height: "30%",
  },
  textContainer: {
    height: "100%",
    justifyContent: "center",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "SFProDisplayBold",
    lineHeight: 24,
  },
  time: {
    fontSize: 16,
    fontFamily: "SFProDisplayRegular",
    lineHeight: 24,
    color: "gray",
  },
  amountStyle: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "right",
    right: 2,
    fontSize: 18,
    fontFamily: "SFProDisplayMedium",
    color: colors.black,
  },
});
