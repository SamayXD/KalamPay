import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import TopSection from "../Components/Modules/TopSection";
import TopCards from "../Components/Atoms/TopCards";
import colors from "../../assets/colors";

const Stats = () => {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const transactionData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        data: [20, 37, 45, 26, 57],
      },
    ],
  };
  const card = {
    currency: "INR",
    balance: "₹ 40,500.80",
    accountNumber: "**** 9934",
    validThru: "05/28",
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Statistic</Text>
      </View>

      <View
        style={{
          height: "35%",
          width: "100%",
        }}
      >
        <TopCards card={card} isStat />
      </View>
      <View style={styles.monthSelector}>
        {months.map((month, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.monthButton, index === 0 && styles.selectedMonth]}
          >
            <Text
              style={[
                styles.monthText,
                index === 0 && styles.selectedMonthText,
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
          data={transactionData}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#lightgray",
    padding: "5%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    fontSize: 24,
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
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
  },
  monthButton: {
    padding: 10,
  },
  selectedMonth: {
    // backgroundColor: "#e6f2ff",
    borderRadius: 20,
    backgroundColor: colors.accentBlue,
  },
  monthText: {
    color: "gray",
  },
  selectedMonthText: {
    color: "black",
  },
  chartContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    margin: 0,
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
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
  },
  earningsText: {
    color: colors.black,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default Stats;
