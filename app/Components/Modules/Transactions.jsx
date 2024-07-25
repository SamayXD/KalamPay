import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TransactionItem from "../Atoms/TransactionItem";
import { ScrollView } from "react-native-gesture-handler";

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
    marginRight: "5%",
    flex: 1,
    marginTop: "3%",
    marginBottom: 0,
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