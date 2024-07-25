import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TransactionItem from "../Atoms/TransactionItem";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../assets/colors";

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <Text style={styles.todayText}>TODAY</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TransactionItem
          Title={"Recieved from SuperKalam"}
          Credit={true}
          Amount={"524"}
        />
        <TransactionItem
          Title={"Paid to Samay N."}
          Credit={false}
          Amount={"790"}
        />
        <TransactionItem Title={"SAMAY"} Credit={true} Amount={"249"} />
        <TransactionItem Title={"SAMAY"} Credit={true} Amount={"7990"} />
        <TransactionItem Title={"SAMAY"} Credit={true} Amount={"2499"} />
        <TransactionItem Title={"SAMAY"} Credit={true} Amount={"20"} />
      </ScrollView>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    marginRight: "0%",
    marginLeft: "-5%",
    paddingHorizontal: "5%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
    marginTop: "3%",
    paddingTop: 10,
    marginBottom: 0,
    backgroundColor: colors.white,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "lightgray",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontFamily: "SFProDisplayBold",
  },
  viewAll: {
    fontSize: 16,
    fontFamily: "SFProDisplayMedium",
    color: "gray",
  },
  todayText: {
    fontSize: 14,
    fontFamily: "SFProDisplayMedium",
    color: "gray",
  },
  scrollView: {
    // maxHeight: "60%",
  },
});
