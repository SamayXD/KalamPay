import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import TopSection from "../Components/Modules/TopSection";
import TopCards from "../Components/Atoms/TopCards";
import BottomNav from "../Components/Modules/BottomNav";
import colors from "../../assets/colors";
import transactionDataByMonth from "../transactionDataByMonth";
import { router } from "expo-router";
import Transactions from "../Components/Modules/Transactions";

const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

const Stats = () => {
  const screenWidth = Dimensions.get("window").width;
  const [selectMonth, setSelectMonth] = useState(0);

  const card = {
    currency: "INR",
    balance: "₹ 40,500.80",
    accountNumber: "**** 9934",
    validThru: "05/28",
  };

  return (
    <View style={{ flex: 1, marginBottom: "0%" }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={{
              // backgroundColor: colors.black,
              padding: 5,
            }}
            onPress={() => {
              router.navigate("/screens/Home");
            }}
          >
            <Image
              source={require("../../assets/images/backIcon.png")}
              style={styles.backButton}
            />
          </Pressable>
          <Text style={styles.headerTitle}>Statistic</Text>
        </View>

        <View style={{ height: "35%", width: "100%" }}>
          <TopCards card={card} isStat />
        </View>

        <View style={styles.monthSelector}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.monthButton,
                index === selectMonth && styles.selectedMonth,
              ]}
              onPress={() => setSelectMonth(index)}
            >
              <Text
                style={[
                  styles.monthText,
                  index === selectMonth && styles.selectedMonthText,
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Transaction</Text>
            <TouchableOpacity style={styles.earningsButton}>
              <Text style={styles.earningsText}>Earnings ▼</Text>
            </TouchableOpacity>
          </View>
          <LineChart
            data={transactionDataByMonth[months[selectMonth]]}
            width={380}
            height={220}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: (opacity = 1) => "gray",
              style: { borderRadius: 16 },
              fillShadowGradient: colors.accentBlue,
              fillShadowGradientOpacity: 1,
              propsForBackgroundLines: { stroke: "transparent" },
              propsForLabels: { fontSize: 12, color: colors.black },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: colors.white,
              },
            }}
            bezier
            fromZero={true}
            style={styles.chart}
            withHorizontalLabels={false}
            renderDotContent={({ x, y, index, indexData }) => (
              <Text
                key={index}
                style={{
                  position: "absolute",
                  top: y - 25,
                  left: x - 30,
                  fontSize: 10,
                  color: "black",
                  fontFamily: "SFProDisplayMedium",
                }}
              >
                ₹ {indexData}
              </Text>
            )}
          />
        </View>
      </ScrollView>
      <BottomNav isNav={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "##F9F6EE",
    padding: "5%",
    // paddingBottom: "10%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  backButton: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    fontSize: 22,
    width: "100%",
    paddingRight: "15%",
    textAlign: "center",
    fontFamily: "SFProDisplayMedium",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    margin: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  currencySelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  currencyText: {
    marginRight: 5,
  },
  dropdownIcon: {
    fontSize: 10,
  },
  visaLogo: {
    width: 50,
    height: 20,
  },
  balanceLabel: {
    color: "#888",
    marginBottom: 5,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  accountNumber: {
    color: "#888",
  },
  validThru: {
    color: "#888",
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    elevation: 1,
  },
  monthButton: {
    padding: 10,
  },
  selectedMonth: {
    borderRadius: 30,
    backgroundColor: colors.accentBlue,
    elevation: 1,
  },
  monthText: {
    color: "gray",
  },
  selectedMonthText: {
    color: "black",
  },
  chartContainer: {
    backgroundColor: "white",
    borderRadius: 35,
    padding: 20,
    margin: 0,
    justifyContent: "center",
    paddingBottom: 10,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  earningsButton: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 20,
  },
  earningsText: {
    color: colors.black,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    paddingRight: 10,
    paddingLeft: 0,
  },
});

export default Stats;
