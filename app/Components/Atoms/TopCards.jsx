import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../../assets/colors";
import useStore from "../../store/MainStore";

const TopCards = ({ card, isStat }) => {
  const mainBalance = useStore((state) => state.mainBalance);
  const indFlag = require("../../../assets/images/indFlag.png");
  const usaFlag = require("../../../assets/images/usaFlag.png");
  const ukFlag = require("../../../assets/images/ukFlag.png");
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isStat
            ? "white"
            : card.currency == "INR"
            ? colors.accentBlue
            : "#E8E8E8",

          width: isStat ? "100%" : 300,
          elevation: isStat ? 1 : 4,
          // borderWidth: isStat ? 1 : 0,
          padding: 20,
          paddingBottom: isStat ? 20 : 40,
          borderRadius: isStat ? 40 : 30,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View
          style={[
            styles.currencyContainer,
            {
              backgroundColor: isStat ? "#F6F6F6" : colors.white,
            },
          ]}
        >
          {card.currency === "INR" ? (
            <Image source={indFlag} style={styles.flagIcon} />
          ) : card.currency === "USD" ? (
            <Image source={usaFlag} style={styles.flagIcon} />
          ) : (
            <Image source={ukFlag} style={styles.flagIcon} />
          )}
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
            color: isStat ? colors.black : colors.black,
          },
        ]}
      >
        Your balance
      </Text>
      <Text style={styles.balanceAmount}>₹{mainBalance}</Text>
      <View style={styles.bottomRow}>
        <View>
          <Text
            style={[
              styles.accountNumber,
              {
                color: isStat ? colors.black : colors.black,
              },
            ]}
          >
            Account Number
          </Text>
          <Text style={styles.validThru}>**** 9934</Text>
        </View>
        <View>
          <Text
            style={[
              styles.accountNumber,
              { color: isStat ? colors.black : colors.black },
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
    marginRight: 15,
    flex: 1,
    elevation: 6,
    marginBottom: 12,
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
    // fontWeight: "bold",
    // marginVertical: 10,
    fontFamily: "SFProDisplayMedium",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  accountNumber: {
    fontSize: 14,
    fontFamily: "SFProDisplayMedium",
  },
  validThru: {
    fontSize: 14,
    fontFamily: "SFProDisplayBold",
  },
  acTitle: {
    color: colors.white,
  },
});

export default TopCards;
