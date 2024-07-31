import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopCards from "../Atoms/TopCards";
import useStore from "../../store/MainStore";
import { useEffect } from "react";
const TopSection = () => {
  // const { cards } = useStore();
  const cards = useStore((state) => state.cards);

  useEffect(() => {
    console.log("cards:", cards);
  }, [cards]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "SFProDisplayMedium",
          fontSize: 32,
          marginLeft: "2%",
          paddingBottom: 5,
        }}
      >
        Account
      </Text>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cards.map((cards) => (
            <TopCards
              // key={transaction.id}
              card={cards}
              isStat={false}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  container: {
    height: "80%",
  },
});
