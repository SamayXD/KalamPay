import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TransactionItem from "../Atoms/TransactionItem";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../assets/colors";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import useStore from "../../store/MainStore";
import { useEffect } from "react";
import { router } from "expo-router";

const Transactions = (props) => {
  const [data, setData] = useState();
  const transactions = useStore((state) => state.transactions);

  useEffect(() => {
    console.log("Transactions:", transactions);
  }, [transactions]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <Pressable
          onPress={() => {
            router.navigate("/screens/Stats");
          }}
        >
          {props.isOpen ? (
            <Text style={styles.viewAll}>Clear</Text>
          ) : (
            <Text style={styles.viewAll}>View All</Text>
          )}
        </Pressable>
      </View>

      <Text style={styles.todayText}>TODAY</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* <TransactionItem
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
        <TransactionItem Title={"SAMAY"} Credit={true} Amount={"20"} /> */}
        {/* {console.log(transactions)} */}
        {transactions.map((transaction) => (
          <TransactionItem
            // key={transaction.id}
            props={transaction}
          />
        ))}
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
    // flex: 1,
    minHeight: "50%",
    maxHeight: "50%",
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
    fontSize: 24,
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
    // Height: "10%",
    // backgroundColor: "black",
    // paddingBottom: 100,
    // flex: 1,
  },
});
