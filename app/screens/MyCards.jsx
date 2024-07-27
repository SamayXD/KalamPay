import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import useStore from "../store/MainStore";
import BottomNav from "../Components/Modules/BottomNav";
import colors from "../../assets/colors";
const CreditCard = ({ color, isBlack, card }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/images/cardDesign.png")}
          style={[
            styles.backDesign,
            {
              opacity: isBlack ? 1 : 0.4,
            },
          ]}
        ></Image>
        <Image
          source={require("../../assets/images/contactIcon.png")}
          style={styles.contactlessIcon}
        />
        <Text style={[styles.cardNumber, isBlack && styles.whiteText]}>
          {card.accountNumber}
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <Text style={styles.cardholderName}>Sarah Muller</Text>
          <Text style={styles.expiryDate}>Exp {card.validThru}</Text>
        </View>
        <Image
          source={require("../../assets/images/visaIcon.png")}
          style={styles.visaLogo}
        />
      </View>
    </View>
  );
};

const MyCards = () => {
  const cards = useStore((state) => state.cards);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>My Card</Text>

        {cards.slice(0, 2).map((card, index) => (
          <CreditCard
            key={index}
            color={index % 2 === 0 ? colors.green : "#000000"}
            isBlack={index % 2 !== 0}
            card={card}
          />
        ))}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add New Card</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <BottomNav isNav="card" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "SFProDisplayRegular",
  },
  notificationIcon: {
    padding: 5,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "SFProDisplayRegular",
  },
  card: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 30,
    overflow: "hidden",
    elevation: 8,
  },
  topSection: {
    flex: 2,
    padding: 20,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  contactlessIcon: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  backDesign: {
    width: 350,
    height: 150,
    left: 40,
    position: "absolute",
    resizeMode: "fit",
  },
  cardNumber: {
    fontSize: 24,
    fontFamily: "SFProDisplayBold",
  },
  cardholderName: {
    fontSize: 14,
    fontFamily: "SFProDisplayBold",
  },
  expiryDate: {
    fontSize: 12,
    color: "#666",
    fontFamily: "SFProDisplayRegular",
  },
  visaLogo: {
    width: 60,
    height: 20,
  },
  whiteText: {
    color: "white",
  },

  addButton: {
    backgroundColor: colors.black,
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "SFProDisplayMedium",
  },
});

export default MyCards;
