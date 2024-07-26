import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../../assets/colors";

const TopCards = ({ card }, isStat) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isStat
            ? "white"
            : card.currency == "INR"
            ? colors.accentBlue
            : "lightgray",

          width: isStat ? "100%" : 300,
          elevation: isStat ? 0 : 6,
          // borderWidth: isStat ? 1 : 0,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View style={styles.currencyContainer}>
          <Image
            source={require("../../../assets/images/indFlag.png")}
            style={styles.flagIcon}
          />
          <Text style={styles.currencyText}>{card.currency}</Text>
        </View>
        <Image
          source={require("../../../assets/images/visaIcon.png")}
          style={styles.visaLogo}
        />
      </View>
      <Text
        style={[
          styles.balanceLabel,
          {
            color: isStat ? colors.black : "lightgray",
          },
        ]}
      >
        Your balance
      </Text>
      <Text style={styles.balanceAmount}>{card.balance}</Text>
      <View style={styles.bottomRow}>
        <View>
          <Text
            style={[
              styles.accountNumber,
              {
                color: isStat ? colors.black : colors.white,
              },
            ]}
          >
            Account Number
          </Text>
          <Text style={styles.accountNumber}>**** 9934</Text>
        </View>
        <View>
          <Text
            style={[
              styles.accountNumber,
              { color: isStat ? colors.black : colors.white },
            ]}
          >
            Valid Thru
          </Text>
          <Text style={styles.validThru}>05/28</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.accentBlue,
    borderRadius: 40,
    padding: 20,
    width: 300,
    marginRight: 15,
    flex: 1,
    elevation: 6,
    marginBottom: 16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 30,
  },
  flagIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 20,
  },
  currencyText: {
    fontSize: 16,
    fontFamily: "SFProDisplayMedium",
  },
  visaLogo: {
    width: 50,
    height: 20,
  },
  balanceLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "SFProDisplayMedium",
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    // marginVertical: 10,
    fontFamily: "SFProDisplayRegular",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  accountNumber: {
    fontSize: 14,
    fontFamily: "SFProDisplayMedium",
  },
  validThru: {
    fontSize: 14,
    fontFamily: "SFProDisplayMedium",
  },
  acTitle: {
    color: colors.white,
  },
});

export default TopCards;
