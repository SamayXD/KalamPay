import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useMemo } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useReducedMotion } from "react-native-reanimated";
import { useRef } from "react";
import { useCallback } from "react";
const Home = () => {
  const snapPoints = useMemo(() => ["50%", "75%"], []);
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

  return (
    <View style={styles.container}>
      <MyBottomSheet />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },
  sheetContainer: {
    padding: "5%",
  },
});
