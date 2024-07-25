import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useMemo } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useReducedMotion } from "react-native-reanimated";
import { useRef } from "react";
import { useCallback } from "react";
import Greet from "../Components/Modules/Greet";
import colors from "../../assets/colors";
import TopSection from "../Components/Modules/TopSection";
import { ScrollView } from "react-native-gesture-handler";
const Home = () => {
  const snapPoints = useMemo(() => ["65%"], []);
  const defautPoints = useMemo(() => ["80%", "37%"], []);
  const bottomSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitile] = useState("");

  const handleClosePress = () => {
    bottomSheetRef.current?.close();
  };
  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
    setIsOpen(true);
  };
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

  const MyBottomSheet = () => {
    return (
      isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
        >
          <View style={styles.sheetContainer}>
            <Text
              style={{
                fontSize: 33,
                fontFamily: "SFProDisplayBold",
              }}
            >
              {title}
            </Text>
          </View>
        </BottomSheet>
      )
    );
  };

  const PaymentSection = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: "8%",
        }}
      >
        <View
          style={{
            width: "80%",
            flexDirection: "row",
          }}
        >
          <Pressable style={styles.payButton} flexDirection={"row"}>
            <Image
              source={require("./../../assets/images/leftDownA.png")}
              style={styles.payicon}
            />
            <Text
              style={{
                fontFamily: "SFProDisplayMedium",
                fontSize: 16,
              }}
            >
              Request
            </Text>
          </Pressable>
          <Pressable
            style={styles.payButton}
            flexDirection={"row"}
            onPress={() => {
              setIsOpen(true);
              handleOpenPress();
            }}
          >
            <Image
              source={require("./../../assets/images/rightTopA.png")}
              style={styles.payicon}
            />
            <Text
              style={{
                fontFamily: "SFProDisplayMedium",
                fontSize: 16,
              }}
            >
              Transfer
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: "22%",
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              backgroundColor: colors.white,
              width: "100%",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: colors.black,
              height: "100%",
            }}
          >
            <Image
              source={require("./../../assets/images/plusIcon.png")}
              style={styles.plusicon}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Greet />
      <View style={{ height: "45%", overflow: "visible" }} horizontal>
        <TopSection />
      </View>
      <PaymentSection />
      <MyBottomSheet />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    // backgroundColor: colors.white,
    backgroundColor: "#F9F9FA",
  },
  sheetContainer: {
    padding: "5%",
  },
  payButton: {
    // width: "30%",
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
  },
  payicon: {
    resizeMode: "contain",
    width: 18,
    height: 18,
    margin: 10,
  },
  plusicon: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
