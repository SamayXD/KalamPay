import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../../assets/colors";

const TransactionItem = ({ props }) => {
  const creditImage = require("../../../assets/images/leftDownA.png");
  const debitImage = require("../../../assets/images/rightTopA.png");

  return (
    <View>
      {props.map((transaction) => (
        <View style={styles.container} key={transaction.id}>
          <View style={styles.imageContainer}>
            <Image
              source={transaction.credit ? creditImage : debitImage}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{transaction.title}</Text>
            <Text style={styles.time}>{transaction.time}</Text>
          </View>

          <Text style={styles.amountStyle}>
            <Text style={{ color: transaction.credit ? "green" : "red" }}>
              {transaction.credit ? "+" : "-"}
            </Text>
            ₹{transaction.amount}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 52.5, // 14% of 375px
    marginVertical: 10,
  },
  imageContainer: {
    width: 56.25, // 15% of 375px
    borderRadius: 39,
    backgroundColor: "#FAF9F6",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F9F6EE",
  },
  imageStyle: {
    resizeMode: "contain",
    width: 25, // 60% of 375px
    height: 20, // 30% of 375px
  },
  textContainer: {
    height: "100%",
    justifyContent: "center",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "SFProDisplayMedium",
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
