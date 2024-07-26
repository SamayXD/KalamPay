import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Greet from "../Components/Modules/Greet";
import colors from "../../assets/colors";
import TopSection from "../Components/Modules/TopSection";
import BottomNav from "../Components/Modules/BottomNav";
import Transactions from "../Components/Modules/Transactions";
import useStore from "../store/MainStore";
const Home = () => {
  const snapPoints = useMemo(() => ["65%"], []);
  const bottomSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
    setIsOpen(true);
  };

  const setTransactions = useStore((state) => state.addTransaction);
  const clearStore = useStore((state) => state.clearStore);
  const fetchedTransactions = () => {
    const tempdat = [
      {
        id: Math.floor(Math.random() * 100000),
        title: "SAMAY N.",
        credit: Math.random() < 0.5,
        amount: Math.floor(Math.random() * 10000),
        time: new Date().toLocaleTimeString(),
      },
    ];
    setTransactions(tempdat);
  };

  // useEffect(() => {
  //   // Fetch transactions from an API or define them here
  //   // const tempdat = fetchedTransactions();
  //   fetchedTransactions();
  // }, [setTransactions]);

  // useEffect(() => {
  // }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const MyBottomSheet = () =>
    isOpen && (
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.sheetContainer}>
          {/* <Text style={styles.sheetTitle}></Text> */}
          {/* <Transactions /> */}
        </View>
      </BottomSheet>
    );

  const PaymentSection = () => (
    <View style={styles.paymentSection}>
      <View style={styles.paymentButtons}>
        <Pressable
          style={styles.payButton}
          onPress={() => {
            fetchedTransactions();
          }}
        >
          <Image
            source={require("./../../assets/images/leftDownA.png")}
            style={styles.payIcon}
          />
          <Text style={styles.payButtonText}>Request</Text>
        </Pressable>
        <Pressable style={styles.payButton} onPress={handleOpenPress}>
          <Image
            source={require("./../../assets/images/rightTopA.png")}
            style={styles.payIcon}
          />
          <Text style={styles.payButtonText}>Transfer</Text>
        </Pressable>
      </View>
      <View style={styles.plusButtonContainer}>
        <Pressable
          style={styles.plusButton}
          onPress={() => {
            clearStore();
            // console.log(useStore);
          }}
        >
          <Image
            source={require("./../../assets/images/plusIcon.png")}
            style={styles.plusIcon}
          />
        </Pressable>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Greet />
        <View style={styles.topSection}>
          <TopSection />
        </View>
        <PaymentSection />
        <Transactions />
      </View>
      <BottomNav />
      <MyBottomSheet />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    marginBottom: 0,
    paddingRight: 0,
    paddingBottom: 0,
    backgroundColor: "#F9F9FA",
  },
  sheetContainer: {
    padding: "5%",
    flex: 1,
  },
  sheetTitle: {
    fontSize: 33,
    fontFamily: "SFProDisplayBold",
  },
  paymentSection: {
    flexDirection: "row",
    height: "8%",
    paddingRight: "5%",
  },
  paymentButtons: {
    width: "80%",
    flexDirection: "row",
  },
  payButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: "1%",
    padding: 10,
    paddingVertical: 15,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#FAF9F6",
    shadowColor: "#F9F6EE",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 32,
  },
  payIcon: {
    resizeMode: "contain",
    width: 18,
    height: 18,
    margin: 10,
  },
  payButtonText: {
    fontFamily: "SFProDisplayMedium",
    fontSize: 16,
  },
  plusButtonContainer: {
    width: "22%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButton: {
    backgroundColor: colors.white,
    width: "80%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.black,
    height: "100%",
  },
  plusIcon: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  topSection: {
    height: "40%",
    overflow: "visible",
  },
});
